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

    //verifyData: VerificationController.verify,

    getUser: UserController.getUser,

    getUserByEmail: UserController.getUserByEmail,

    createUser: UserController.createUser,

    updateUser: UserController.updateUser,

    deleteUser: UserController.deleteUser,
    
    // Docs
};

exports.root = root;