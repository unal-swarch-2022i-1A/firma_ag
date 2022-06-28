// App
const { endpoints } = require('../config');
// Modules
var fetch = require("node-fetch-commonjs");
// Response models:
//const entity = require('./classes.js');
// Controllers
const SignController = require('../application/sign/SignController').default;
const UserController = require('../application/user/UserController').default;


/**
 * The root provides a resolver function for each API endpoint
 */
const root = {
    hello: () => {
        return 'Hello world!';
      },     

    signData: SignController.sign,

    getUser: UserController.getUser,

    getUserByEmail: UserController.test,

    createUser: UserController.test,

    updateUser: UserController.test,

    deleteUser: UserController.test,

};

exports.root = root;