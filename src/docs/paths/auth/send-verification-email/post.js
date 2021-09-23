const post = {
  summary: 'Send verification email',
  description: 'An email will be sent to verify email.',
  tags: ['Auth'],
  responses: {
    204: {
      description: 'No content',
    },
    401: {
      $ref: '#/components/responses/Unauthorized',
    },
  },
  security: [
    {
      Bearer: [],
    },
  ],
};

module.exports = post;
