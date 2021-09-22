const Login = require('./login');
const Logout = require('./logout');
const Register = require('./register');
const RefreshToken = require('./refresh-token');
const ForgetPassword = require('./forget-password');
const ResetPassword = require('./reset-password');
const SendVerificationEmail = require('./send-verification-email');
const VerifyEmail = require('./verify-email');

module.exports = {
  Login,
  Logout,
  Register,
  RefreshToken,
  ForgetPassword,
  ResetPassword,
  SendVerificationEmail,
  VerifyEmail,
};
