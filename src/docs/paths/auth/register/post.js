const post = {
  summary: 'Register as user',
  tags: ['Auth'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['name', 'email', 'password'],
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
          },
        },
        example: {
          name: 'fake name',
          email: 'fake@example.com',
          password: 'password1',
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          example: {
            status: {
              code: 0,
              message: 'Success',
            },
            data: {
              user: {
                id: '5ebac534954b54139806c112',
                email: 'fake@example.com',
                name: 'fake name',
                role: 'user',
              },
              tokens: {
                token:
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWJhYzUzNDk1NGI1NDEzOTgwNmMxMTIiLCJpYXQiOjE1ODkyOTg0ODQsImV4cCI6MTU4OTMwMDI4NH0.m1U63blB0MLej_WfB7yC2FTMnCziif9X8yzwDEfJXAg',
                expires: '2020-05-12T16:18:04.793Z',
              },
            },
          },
          schema: {
            type: 'object',
            properties: {
              user: {
                $ref: '#/components/schemas/User',
              },
              tokens: {
                $ref: '#/components/schemas/AuthTokens',
              },
            },
          },
        },
      },
    },
    400: {
      $ref: '#/components/responses/DuplicateEmail',
    },
  },
};

module.exports = post;
