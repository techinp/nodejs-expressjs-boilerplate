const AuthTokens = {
  type: 'object',
  properties: {
    access: {
      $ref: '#/components/schemas/Token',
    },
    refresh: {
      $ref: '#/components/schemas/Token',
    },
  },
};

module.exports = AuthTokens;
