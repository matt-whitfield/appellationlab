module.exports = async (policyContext, config, { strapi }) => {
  // Get the authenticated user
  const user = policyContext.state.user;
  if (!user) return false;

  // For findOne or update/delete by ID
  const { id } = policyContext.params;
  if (id) {
    const enrollment = await strapi.entityService.findOne('api::course-enrollment.course-enrollment', id, {
      populate: ['user'],
    });
    return enrollment && enrollment.user && enrollment.user.id === user.id;
  }

  // For find (list), filter to only user's enrollments
  if (policyContext.request && policyContext.request.query) {
    policyContext.request.query = {
      ...policyContext.request.query,
      filters: {
        ...policyContext.request.query.filters,
        user: user.id,
      },
    };
  }

  return true;
};
