// src/api/final-exam-attempt/content-types/final-exam-attempt/lifecycles.ts

export default {
  async beforeCreate(event) {
    const { data } = event.params;

    // Defensive: Ensure required fields exist
    if (!data.final_exam || !data.user || !data.answers) {
      console.error('Missing required fields in exam attempt:', data);
      throw new Error('Missing required fields: final_exam, user, or answers');
    }

    // Extract IDs safely
    const finalExamId = data.final_exam?.set
      ? (typeof data.final_exam.set[0] === 'object' ? data.final_exam.set[0].id : data.final_exam.set[0])
      : (typeof data.final_exam === 'object' ? data.final_exam.id : data.final_exam);

    const userId = data.user?.set
      ? (typeof data.user.set[0] === 'object' ? data.user.set[0].id : data.user.set[0])
      : (typeof data.user === 'object' ? data.user.id : data.user);

    // Extract course and course_enrollment IDs safely
    const courseId = data.course?.set
      ? (typeof data.course.set[0] === 'object' ? data.course.set[0].id : data.course.set[0])
      : (typeof data.course === 'object' ? data.course.id : data.course);

    const courseEnrollmentId = data.course_enrollment?.set
      ? (typeof data.course_enrollment.set[0] === 'object' ? data.course_enrollment.set[0].id : data.course_enrollment.set[0])
      : (typeof data.course_enrollment === 'object' ? data.course_enrollment.id : data.course_enrollment);

    // Set the extracted values back to data
    data.course = courseId;
    data.course_enrollment = courseEnrollmentId;

    const userAnswers = data.answers; // { [questionId]: selectedOptionId }

    // Fetch the exam and its questions (with correct answers and points)
    let exam;
    try {
      exam = await strapi.entityService.findOne('api::final-exam.final-exam', finalExamId, {
        populate: {
          questions: {
            populate: ['options'],
          },
        },
      });
    } catch (err) {
      console.error('Error fetching exam:', err);
      throw new Error('Could not fetch exam for grading');
    }

    const questions = (exam as any).questions || [];
    let score = 0;
    let totalQuestions = questions.length;
    for (const question of questions) {
      // Use documentId for answer lookup, since frontend uses documentId
      const qid = question.documentId || question.id;
      const userAnswer = userAnswers[qid];
      if (!userAnswer) {
        continue;
      }
      // Find the option the user selected (compare only optionId as string)
      const selectedOption = (question.options || []).find(opt => String(opt.optionId) === String(userAnswer));
      if (!selectedOption) {
        continue;
      }
      // If the selected option exists and is correct, increment score
      if (selectedOption.isCorrect) {
        score++;
      }
    }
    // Calculate percentage and pass/fail
    const scorePercentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    const passed = scorePercentage >= exam.passingScore;

    // Calculate attempt number
    let previousAttempts = 0;
    try {
      previousAttempts = await strapi.entityService.count('api::final-exam-attempt.final-exam-attempt', {
        filters: {
          final_exam: finalExamId,
          user: userId,
        },
      });
    } catch (err) {
      console.error('Error counting previous attempts:', err);
    }
    const attemptNumber = previousAttempts + 1;

    // Update the attempt data
    data.score = score;
    data.scorePercentage = scorePercentage;
    data.passed = passed;
    data.attemptNumber = attemptNumber;
    data.completedAt = new Date().toISOString();
  },
  async beforeUpdate(event) {
    const { data } = event.params;

    // Add your logic for beforeUpdate lifecycle here
  },
};