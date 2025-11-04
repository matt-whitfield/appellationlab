/**
 * final-exam-attempt controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::final-exam-attempt.final-exam-attempt', ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;
    if (!user) return ctx.unauthorized('You must be authenticated');
    const { data } = ctx.request.body;
    // Always set the user field from the authenticated user
    const result = await strapi.entityService.create('api::final-exam-attempt.final-exam-attempt', {
      data: { ...data, user: user.id },
      populate: ['final_exam', 'user'],
    });
    return { data: result };
  },
}));
