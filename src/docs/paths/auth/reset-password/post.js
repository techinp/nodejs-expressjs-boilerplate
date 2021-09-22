const post = {
  summary: 'Reset password',
  tags: ['Auth'],
  parameters: {
    in: 'query',
    name: 'token',
    required: true,
    schema: {
      type: 'string',
    },
    description: 'The reset password token',
  },
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['password'],
          properties: {
            password: {
              type: 'string',
              format: 'password',
              minLength: 8,
              description: 'At least one number and one letter',
            },
          },
        },
        example: {
          password: 'password1',
        },
      },
    },
  },
  responses: {
    204: {
      description: 'No content',
    },
    401: {
      description: 'Password reset failed',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Error',
          },
          example: {
            code: 401,
            message: 'Password reset failed',
          },
        },
      },
    },
  },
};

module.exports = post;
