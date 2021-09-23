const { version } = require('../../package.json');
const config = require('../config/config');
const tags = require('./tags');
const Schemas = require('./schemas');
const Auth = require('./paths/auth');
const User = require('./paths/user');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'node-express-boilerplate API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/hagopj13/node-express-boilerplate/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}`,
    },
  ],
  tags,
  components: {
    schemas: {
      User: Schemas.User,
      Token: Schemas.Token,
      AuthTokens: Schemas.AuthTokens,
      Error: Schemas.Error,
    },
    responses: {
      DuplicateEmail: {
        description: 'Email already taken',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              code: 400,
              message: 'Email already taken',
            },
          },
        },
      },
      Unauthorized: {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              code: 401,
              message: 'Please authenticate',
            },
          },
        },
      },
      Forbidden: {
        description: 'Forbidden',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              code: 403,
              message: 'Forbidden',
            },
          },
        },
      },
      NotFound: {
        description: 'Not Found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              code: 404,
              message: 'Not Found',
            },
          },
        },
      },
    },
    securitySchemes: {
      Bearer: {
        type: 'apiKey',
        in: 'header',
        description: 'Enter JWT token only',
        bearerFormat: 'JWT',
      },
      BasicAuth: {
        type: 'http',
        scheme: 'basic',
      },
    },
  },
  security: [
    {
      Bearer: [],
    },
    {
      BasicAuth: [],
    },
  ],
  paths: {
    '/auth/register': Auth.Register,
    '/auth/login': Auth.Login,
    '/auth/logout': Auth.Logout,
    '/auth/refresh-tokens': Auth.RefreshToken,
    '/auth/forgot-password': Auth.ForgetPassword,
    '/auth/reset-password': Auth.ResetPassword,
    '/auth/send-verification-email': Auth.SendVerificationEmail,
    '/auth/verify-email': Auth.VerifyEmail,
    '/user': User.User,
  },
};

module.exports = swaggerDef;
