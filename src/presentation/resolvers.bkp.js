// App
const { endpoints } = require('../config');
// Modules
var fetch = require("node-fetch-commonjs");
// Response models:
const entity = require('./classes.js');
// Controllers
const SignController = require('../application/sign/SignController').default;

/**
 * The root provides a resolver function for each API endpoint
 */
const root = {
    hello: () => {
        return 'Hello world!';
      },     

    signData: SignController.sign,

    getUser: (id) => {
        const url = endpoints.user + `${id.id}`;
        return fetch(url, {
            "method": "GET", 
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            return new entity.User(data.userId, data.firstName, data.lastName, data.email, data.password)//?
        }) 
    },

    getUserByEmail: (email) => {
        const url = `http://127.0.0.1:8090/users/user`;
        console.log(url)
        var data = {"email": email.email}
        return fetch(url, {
            "method": "POST", 
            "body": JSON.stringify(data), 
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            return new entity.User(data.userId, data.firstName, data.lastName, data.email, data.password)//?
        }) 
    },

    createUser: (user) => {
        const url = endpoints.user;
        var data = {"firstName": user.firstName, "lastName": user.lastName, "email": user.email, "password": user.password}
        return fetch(url, {
            "method": "POST",
            "body": JSON.stringify(data), 
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => {
            return new entity.RestStatus(res.status, res.statusText);
        });
    },

    updateUser: (user) => {
        const url = endpoints.user + `${user.id}`;
        var data = {"firstName": user.firstName, "lastName": user.lastName, "email": user.email, "password": user.password}
        return fetch(url, {
            "method": "PUT",
            "body": JSON.stringify(data), 
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            return new entity.User(data.userId, data.firstName, data.lastName, data.email, data.passord)//?
        }) 
    },

    deleteUser: (id) => {
        const url = endpoints.user + `${id.id}`;
        return fetch(url, {
            "method": "DELETE",
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => {
            return new entity.RestStatus(res.status, res.statusText);
        });
    },

    getDoc: (id) => {
        const url = endpoints.doc + `${id.id}`;
        return fetch(url, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            return new entity.Document(data._id, data.title, data.author);//?
        }) 
    },

    createDoc: (doc) => {
        const url = endpoints.doc;
        var data = {"title": doc.title, "author": doc.author}
        return fetch(url, {
            "method": "POST",
            "body": JSON.stringify(data), 
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => {
            return new entity.Document(res._id, res.title, res.author);
        });
    }

};

exports.root = root;