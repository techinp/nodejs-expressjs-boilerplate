const serverless = require('serverless-http');
const app = require('./config/express');

const handler = serverless(app);

module.exports.server = async (event, context) => await handler(event, context);
