var fetch = require("node-fetch-commonjs");
const restStatus = require('./classes.js')
// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return 'Hello world!';
      },
     
    getPrivateKey: (id) => {
        const url = `http://127.0.0.1:8093/keys/${id.id}/private`;
        return fetch(url, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
            
        })
        .then(res => res.text())
    },

    getPublicKey: (id) => {
        const url = `http://127.0.0.1:8093/keys/${id.id}/public`;
        return fetch(url, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
            
        })
        .then(res => res.text())
    },

    generateUserKeys: (id) => {
        const url = `http://127.0.0.1:8093/keys/${id.id}`;
        return fetch(url, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            return new restStatus.RestStatus(res.status, res.statusText);
        });
        
    },

    reGenerateUserKeys: (id) => {
        const url = `http://127.0.0.1:8093/keys/${id.id}`;
        return fetch(url, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            return new restStatus.RestStatus(res.status, res.statusText);
        });        
    },

    deleteUserKeys: (id) => {
        const url = `http://127.0.0.1:8093/keys/${id.id}`;
        return fetch(url, {
            "method": "DELETE",
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => {
            return new restStatus.RestStatus(res.status, res.statusText);
        });        
    }
};

exports.root = root;