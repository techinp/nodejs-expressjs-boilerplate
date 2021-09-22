const post = {
  summary: 'Create a user',
  description: 'Only admins can create other users.',
  tags: ['Users'],
  security: {
    bearerAuth: [],
  },
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['name', 'email', 'password', 'role'],
          properties: {
            name: {
              type: 'string',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'must be unique',
            },
            password: {
              type: 'string',
              format: 'password',
              minLength: 8,
              description: 'At least one number and one letter',
            },
            role: {
              type: 'string',
              enum: ['user', 'admin'],
            },
          },
        },
        example: {
          name: 'fake name',
          email: 'fake@example.com',
          password: 'password1',
          role: 'user',
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/User',
          },
        },
      },
    },
    400: {
      $ref: '#/components/responses/DuplicateEmail',
    },
    401: {
      $ref: '#/components/responses/Unauthorized',
    },
    403: {
      $ref: '#/components/responses/Forbidden',
    },
  },
};

module.exports = post;
