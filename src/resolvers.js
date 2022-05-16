var fetch = require("node-fetch-commonjs");
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
    }
};

exports.root = root;