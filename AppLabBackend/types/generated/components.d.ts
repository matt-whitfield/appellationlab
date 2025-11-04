import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsCourseDetails extends Struct.ComponentSchema {
  collectionName: 'components_components_course_details';
  info: {
    displayName: 'Course Details';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.link', false>;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['Difficulty_Icon', 'Time_Icon', 'Cert_Icon']
    >;
    subHeading: Schema.Attribute.String;
  };
}

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['WINE_ICON', 'GRAPES_ICON', 'MOUNTAIN_ICON', 'MAP_ICON']
    >;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    socialType: Schema.Attribute.Enumeration<
      ['Instagram', 'Twitter_X', 'Facebook']
    >;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    url: Schema.Attribute.String;
  };
}

export interface LayoutArticleLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_article_links';
  info: {
    displayName: 'Article Link';
  };
  attributes: {
    heading: Schema.Attribute.String;
    link: Schema.Attribute.String;
    linkTitle: Schema.Attribute.String;
    publishDate: Schema.Attribute.Date;
    subHeading: Schema.Attribute.String;
  };
}

export interface LayoutContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_infos';
  info: {
    displayName: 'ContactInfo';
  };
  attributes: {
    address: Schema.Attribute.String;
    columnTitle: Schema.Attribute.String;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.BigInteger;
    socialLinks: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface LayoutCourseBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_course_banners';
  info: {
    displayName: 'Course Banner';
  };
  attributes: {
    courseDetails: Schema.Attribute.Component<
      'components.course-details',
      true
    >;
  };
}

export interface LayoutCourseDescription extends Struct.ComponentSchema {
  collectionName: 'components_layout_course_descriptions';
  info: {
    displayName: 'course description';
  };
  attributes: {
    instructorNotes: Schema.Attribute.Blocks;
    learningOutcomes: Schema.Attribute.Blocks;
    overview: Schema.Attribute.Text;
    prerequisites: Schema.Attribute.Blocks;
  };
}

export interface LayoutCourseSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_course_sections';
  info: {
    description: '';
    displayName: 'Course-Section';
  };
  attributes: {
    courseBanner: Schema.Attribute.Component<'layout.course-banner', true>;
    cta: Schema.Attribute.Text;
    headingText: Schema.Attribute.Component<'layout.hero-section', false>;
    keyLearningPoints: Schema.Attribute.Component<
      'layout.key-learning-points',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    description: '';
    displayName: 'Features Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'components.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contactInfo: Schema.Attribute.Component<'layout.contact-info', false>;
    externalLinks: Schema.Attribute.Component<'components.link', true>;
    externalLinksTitle: Schema.Attribute.String;
    internalLinksTitle: Schema.Attribute.String;
    newsletterText: Schema.Attribute.Blocks;
    newsletterTitle: Schema.Attribute.String;
    siteLinks: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', true>;
    logoText: Schema.Attribute.Component<'components.link', false>;
    pageLink: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'hero-section';
  };
  attributes: {
    courseLink: Schema.Attribute.Component<'components.link', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subHeading: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutKeyLearningPoints extends Struct.ComponentSchema {
  collectionName: 'components_layout_key_learning_points';
  info: {
    displayName: 'Key Learning Points';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    learningPoint: Schema.Attribute.Component<'layout.learning-point', true>;
  };
}

export interface LayoutLearningPoint extends Struct.ComponentSchema {
  collectionName: 'components_layout_learning_points';
  info: {
    displayName: 'learningPoint';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutMaterials extends Struct.ComponentSchema {
  collectionName: 'components_layout_materials';
  info: {
    displayName: 'Materials';
  };
  attributes: {
    additionalResources: Schema.Attribute.Blocks;
    files: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    link: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface LayoutMediaCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_media_cards';
  info: {
    displayName: 'Media Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['GRAPH', 'FILE', 'PHOTO', 'AWARD', 'LEARN', 'STORY', 'DEFAULT']
    > &
      Schema.Attribute.DefaultTo<'DEFAULT'>;
    isExternal: Schema.Attribute.Boolean;
    link: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.String;
  };
}

export interface LayoutMediaContact extends Struct.ComponentSchema {
  collectionName: 'components_layout_media_contacts';
  info: {
    displayName: 'Media Contact';
  };
  attributes: {
    email: Schema.Attribute.Email;
    heading: Schema.Attribute.String;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutPressCards extends Struct.ComponentSchema {
  collectionName: 'components_layout_press_cards';
  info: {
    displayName: 'Press Cards';
  };
  attributes: {
    mediaCard: Schema.Attribute.Component<'layout.media-card', true>;
    sectionHeading: Schema.Attribute.String;
  };
}

export interface LayoutPressReleases extends Struct.ComponentSchema {
  collectionName: 'components_layout_press_releases';
  info: {
    displayName: 'Press Releases';
  };
  attributes: {
    pressLink: Schema.Attribute.Component<'layout.article-link', true>;
    sectionHeading: Schema.Attribute.String;
  };
}

export interface LayoutSyllabus extends Struct.ComponentSchema {
  collectionName: 'components_layout_syllabi';
  info: {
    displayName: 'syllabus';
  };
  attributes: {
    description: Schema.Attribute.Text;
    lessons: Schema.Attribute.Relation<'oneToMany', 'api::lesson.lesson'>;
  };
}

export interface LessonComponentsCardBlock extends Struct.ComponentSchema {
  collectionName: 'components_lesson_components_card_blocks';
  info: {
    description: '';
    displayName: 'CardBlock';
  };
  attributes: {
    richText: Schema.Attribute.Blocks;
    singleMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface LessonComponentsStoryScrollTimeline
  extends Struct.ComponentSchema {
  collectionName: 'components_lesson_components_story_scroll_timelines';
  info: {
    description: '';
    displayName: 'storyScrollTimeline';
  };
  attributes: {
    events: Schema.Attribute.Component<
      'lesson-components.timeline-events',
      true
    >;
    Heading: Schema.Attribute.String;
  };
}

export interface LessonComponentsTabBar extends Struct.ComponentSchema {
  collectionName: 'components_lesson_components_tab_bars';
  info: {
    description: '';
    displayName: 'TabBar';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'lesson-components.tabs', true>;
    title: Schema.Attribute.String;
  };
}

export interface LessonComponentsTabs extends Struct.ComponentSchema {
  collectionName: 'components_lesson_components_tabs';
  info: {
    description: '';
    displayName: 'Tabs';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    scrollTimeline: Schema.Attribute.Component<
      'lesson-components.story-scroll-timeline',
      true
    >;
    tabTitle: Schema.Attribute.String;
    textContent: Schema.Attribute.Blocks;
    videoEmbed: Schema.Attribute.Component<'shared.video-embed', true>;
  };
}

export interface LessonComponentsTimelineEvents extends Struct.ComponentSchema {
  collectionName: 'components_lesson_components_timeline_events';
  info: {
    description: '';
    displayName: 'timeline-events';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    styledText: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    year: Schema.Attribute.BigInteger;
  };
}

export interface LessonComponentsTopicFactsCallout
  extends Struct.ComponentSchema {
  collectionName: 'components_lesson_components_topic_facts_callouts';
  info: {
    displayName: 'Topic Facts Callout';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    emoji: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    note: Schema.Attribute.Text;
  };
}

export interface QuizAnswerOption extends Struct.ComponentSchema {
  collectionName: 'components_quiz_answer_options';
  info: {
    displayName: 'AnswerOption';
  };
  attributes: {
    isCorrect: Schema.Attribute.Boolean;
    optionId: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface QuizQuizChoice extends Struct.ComponentSchema {
  collectionName: 'components_quiz_quiz_choices';
  info: {
    displayName: 'QuizChoice';
  };
  attributes: {
    answerOption: Schema.Attribute.Component<'quiz.answer-option', true>;
  };
}

export interface SharedCallout extends Struct.ComponentSchema {
  collectionName: 'components_shared_callouts';
  info: {
    displayName: 'Callout';
  };
  attributes: {
    calloutType: Schema.Attribute.Enumeration<['tip', 'info']>;
    text: Schema.Attribute.RichText;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    description: '';
    displayName: 'image';
  };
  attributes: {
    aspectRatio: Schema.Attribute.Enumeration<
      ['widescreen_16_9', 'standard_4_3', 'square_1_1']
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMarkdown extends Struct.ComponentSchema {
  collectionName: 'components_shared_markdowns';
  info: {
    displayName: 'markdown';
  };
  attributes: {
    markdownBlock: Schema.Attribute.RichText;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    richText: Schema.Attribute.Blocks;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTextContent extends Struct.ComponentSchema {
  collectionName: 'components_lesson_components_text_contents';
  info: {
    displayName: 'Text Content';
  };
  attributes: {
    TextContent: Schema.Attribute.Blocks;
  };
}

export interface SharedVideoEmbed extends Struct.ComponentSchema {
  collectionName: 'components_lesson_components_video_embeds';
  info: {
    description: '';
    displayName: 'Video Embed';
  };
  attributes: {
    aspectRatio: Schema.Attribute.Enumeration<
      ['widescreen_16_9', 'standard_4_3', 'square_1_1']
    > &
      Schema.Attribute.DefaultTo<'widescreen_16_9'>;
    autoplay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    controls: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface WineMapKeyWineries extends Struct.ComponentSchema {
  collectionName: 'components_wine_map_key_wineries';
  info: {
    displayName: 'Key Wineries';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface WineMapRedVarietals extends Struct.ComponentSchema {
  collectionName: 'components_wine_map_red_varietals';
  info: {
    displayName: 'wineVarietals';
  };
  attributes: {
    varietal: Schema.Attribute.String;
  };
}

export interface WineMapVarietals extends Struct.ComponentSchema {
  collectionName: 'components_wine_map_varietals';
  info: {
    displayName: 'Varietals';
  };
  attributes: {
    red: Schema.Attribute.Enumeration<
      ['Cabernet Sauvignon', 'Merlot', 'Syrah']
    >;
    white: Schema.Attribute.Enumeration<
      ['Chardonnay', 'Sauvignon Blanc', 'Riesling']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.course-details': ComponentsCourseDetails;
      'components.feature': ComponentsFeature;
      'components.link': ComponentsLink;
      'layout.article-link': LayoutArticleLink;
      'layout.contact-info': LayoutContactInfo;
      'layout.course-banner': LayoutCourseBanner;
      'layout.course-description': LayoutCourseDescription;
      'layout.course-section': LayoutCourseSection;
      'layout.features-section': LayoutFeaturesSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.key-learning-points': LayoutKeyLearningPoints;
      'layout.learning-point': LayoutLearningPoint;
      'layout.materials': LayoutMaterials;
      'layout.media-card': LayoutMediaCard;
      'layout.media-contact': LayoutMediaContact;
      'layout.press-cards': LayoutPressCards;
      'layout.press-releases': LayoutPressReleases;
      'layout.syllabus': LayoutSyllabus;
      'lesson-components.card-block': LessonComponentsCardBlock;
      'lesson-components.story-scroll-timeline': LessonComponentsStoryScrollTimeline;
      'lesson-components.tab-bar': LessonComponentsTabBar;
      'lesson-components.tabs': LessonComponentsTabs;
      'lesson-components.timeline-events': LessonComponentsTimelineEvents;
      'lesson-components.topic-facts-callout': LessonComponentsTopicFactsCallout;
      'quiz.answer-option': QuizAnswerOption;
      'quiz.quiz-choice': QuizQuizChoice;
      'shared.callout': SharedCallout;
      'shared.image': SharedImage;
      'shared.markdown': SharedMarkdown;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text-content': SharedTextContent;
      'shared.video-embed': SharedVideoEmbed;
      'wine-map.key-wineries': WineMapKeyWineries;
      'wine-map.red-varietals': WineMapRedVarietals;
      'wine-map.varietals': WineMapVarietals;
    }
  }
}
