const post = {
  summary: 'Forgot password',
  description: 'An email will be sent to reset password.',
  tags: ['Auth'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['email'],
          properties: {
            email: {
              type: 'string',
              format: 'email',
            },
          },
        },
        example: {
          email: 'fake@example.com',
        },
      },
    },
  },
  responses: {
    204: {
      description: 'No content',
    },
    404: {
      $ref: '#/components/responses/NotFound',
    },
  },
};

module.exports = post;
