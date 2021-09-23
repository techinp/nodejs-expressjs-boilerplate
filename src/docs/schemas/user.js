const User = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    name: {
      type: 'string',
    },
    role: {
      type: 'string',
      enum: ['user', 'admin'],
    },
  },
  example: {
    id: '5ebac534954b54139806c112',
    email: 'fake@example.com',
    name: 'fake name',
    role: 'user',
  },
}

module.exports = User;
