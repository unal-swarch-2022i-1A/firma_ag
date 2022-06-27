require('dotenv').config()

const port = process.env.PORT;

// You may use this as a boolean value for different situations
const env = {
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  staging: process.env.NODE_ENV === 'staging',
  production: process.env.NODE_ENV === 'production',
};

const endpoints = {
  user: process.env.USER_ENDPOINT,
  doc: process.env.DOC_ENDPOINT,
  sign: process.env.SIGN_ENDPOINT,
  verification: process.env.VERIFICATION_ENDPOINT
}

exports.port = port;
exports.env = env;
exports.endpoints = endpoints;