var fetch = require("node-fetch-commonjs");
const entity = require('./classes.js')
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

    signData: (signature, userId, data) => {
        const url = signEndpoint;
        var data = {"signature": signature, "user_id": userId, "data": data}
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
            "method": "POST", 
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            return new entity.User(data.userId, data.firstName, data.lastName, data.email, data.passord)//?
        }) 
    },

    createUser: (firsName, lastName, email, password) => {
        const url = userEndpoint;
        var data = {"firstName": firsName.firsName, "lastName": lastName.lastName, 
        "data": data, "email": email.email, "password": password.passord}
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

    updateUser: (id,firsName, lastName, email, password) => {
        const url = userEndpoint + `${id.id}`;
        var data = {"firstName": firsName.firsName, "lastName": lastName.lastName, 
        "data": data, "email": email.email, "password": password.passord}
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