// Function to generate preview pathname based on content type and document
const getPreviewPathname = (uid: string, { locale, document }): string | null => {
  const { slug } = document;

  // Handle different content types with their specific URL patterns
  switch (uid) {
    // Handle single type pages
    case "api::home-page.home-page":
      return "/"; // Homepage

    case "api::press-room.press-room":
      return "/press-room"; // Press room page

    // Handle course pages
    case "api::course.course": {
      if (!slug) {
        return "/courses"; // Courses listing page
      }
      return `/courses/${slug}`; // Individual course page
    }

    // Handle lesson pages - nested under course
    case "api::lesson.lesson": {
      if (!slug) {
        return "/courses"; // Courses listing page
      }
      // Get the parent course slug from the lesson's course relationship
      const courseSlug = document.course?.slug;
      if (!courseSlug) {
        // If no course relationship found, fallback to a simple lesson URL structure
        console.warn(`No course found for lesson ${document.id}, using fallback URL`);
        return `/courses/wine-course/${slug}`; // fallback with default course
      }
      return `/courses/${courseSlug}/${slug}`;
    }

    // Handle topic pages - nested under course/lesson
    case "api::topic.topic": {
      if (!slug) {
        return "/courses"; // Courses listing page
      }
      // Get the parent lesson and course slugs
      const lessonSlug = document.lesson?.slug;
      const courseSlug = document.lesson?.course?.slug;

      if (!lessonSlug) {
        console.warn(`No lesson found for topic ${document.id}, using fallback URL`);
        return `/courses/${courseSlug || 'wine-course'}`;
      }

      if (!courseSlug) {
        console.warn(`No course found for topic ${document.id}, using fallback URL`);
        return `/courses/wine-course/${lessonSlug}/${slug}`;
      }

      return `/courses/${courseSlug}/${lessonSlug}/${slug}`;
    }

    // Handle vineyard pages
    case "api::vineyard.vineyard": {
      const uid = document.uid || slug;
      if (!uid) {
        return "/vineyards"; // Vineyards listing page
      }
      return `/vineyards/${uid}`; // Individual vineyard page
    }

    default: {
      // Return null for content types that don't have preview pages
      // This will disable the preview button for those content types
      return null;
    }
  }
};

export default ({ env }) => {
  // Get environment variables
  const clientUrl = env("CLIENT_URL");
  const previewSecret = env("PREVIEW_SECRET");

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
    preview: {
      enabled: true,
      config: {
        allowedOrigins: clientUrl,
        async handler(uid, { documentId, locale, status }) {
          let document;

          try {
            // For now, fetch all documents with basic data only
            // We'll use fallback logic in URL generation until relationships work properly
            document = await strapi.documents(uid).findOne({ documentId });

            // Try to add relationship data if possible
            if (uid === "api::topic.topic") {
              try {
                // For topics, try to populate the lesson relationship
                const topicWithLesson = await strapi.documents(uid).findOne({
                  documentId,
                  populate: ['lesson']
                });
                if (topicWithLesson.lesson) {
                  document.lesson = topicWithLesson.lesson;
                }
              } catch (error) {
                console.warn(`Could not populate lesson for topic ${documentId}:`, error.message);
              }
            }
          } catch (error) {
            console.error(`Error fetching document for preview (${uid}, ${documentId}):`, error);
            // Fallback to basic fetch
            document = await strapi.documents(uid).findOne({ documentId });
          }

          // Generate the preview pathname based on content type and document
          const pathname = getPreviewPathname(uid, { locale, document });

          // Disable preview if the pathname is not found
          if (!pathname) {
            return null;
          }

          // Use Next.js draft mode passing it a secret key and the content-type status
          const urlSearchParams = new URLSearchParams({
            url: pathname,
            secret: previewSecret,
            status,
          });
          return `${clientUrl}/api/preview?${urlSearchParams}`;
        },
      },
    },
  };
};
