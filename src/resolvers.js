var fetch = require("node-fetch-commonjs");
const entity = require('./classes.js')
const FormData = require('form-data');
// The root provides a resolver function for each API endpoint

const userEndpoint = `http://127.0.0.1:8090/users/`
const docEndpoint = `http://127.0.0.1:8091/docs/`
const keysEndpoint = `http://127.0.0.1:8093/keys/`
const signEndpoint = `http://127.0.0.1:8095/sign`


const root = {
    hello: () => {
        return 'Hello world!';
      },
     
    getPrivateKey: (id) => {
        const url = keysEndpoint + `${id.id}/private`;
        return fetch(url, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
            
        })
        .then(res => res.text())
    },

    getPublicKey: (id) => {
        const url = keysEndpoint + `${id.id}/public`;
        return fetch(url, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
            
        })
        .then(res => res.text())
    },

    generateUserKeys: (id) => {
        const url = keysEndpoint + `${id.id}`;
        return fetch(url, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            return new entity.RestStatus(res.status, res.statusText);
        });
        
    },

    reGenerateUserKeys: (id) => {
        const url = keysEndpoint + `${id.id}`;
        return fetch(url, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            return new entity.RestStatus(res.status, res.statusText);
        });        
    },

    deleteUserKeys: (id) => {
        const url = keysEndpoint + `${id.id}`;
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

    signData: (signature) => {
        const url = signEndpoint;
        var data = {"signature": signature.signature, "user_id": signature.userId, "data": signature.data}
        return fetch(url, {
            "method": "POST",
            "body": JSON.stringify(data), 
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            return new entity.Signature(data.signature, data.user_Id, data.data)//?
        }) 
    },

    getUser: (id) => {
        const url = userEndpoint + `${id.id}`;
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
        const url = userEndpoint;
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
        const url = userEndpoint + `${user.id}`;
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
        const url = userEndpoint + `${id.id}`;
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
        const url = docEndpoint + `${id.id}`;
        return fetch(url, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            return new entity.Document(data.id, data.name, data.folder)//?
        }) 
    }

};

exports.root = root;