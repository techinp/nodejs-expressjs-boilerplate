const post = {
  summary: 'Verify email',
  tags: ['Auth'],
  parameters: {
    in: 'query',
    name: 'token',
    required: true,
    schema: {
      type: 'string',
    },
    description: 'The verify email token',
  },
  responses: {
    204: {
      description: 'No content',
    },
    401: {
      description: 'Verify email failed',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Error',
          },
          example: {
            code: 401,
            message: 'Verify email failed',
          },
        },
      },
    },
  },
  security: {
    bearerAuth: [],
  },
};

module.exports = post;
