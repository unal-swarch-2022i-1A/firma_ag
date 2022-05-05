var fetch = require("node-fetch-commonjs");
var express = require('express');
const { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const keysUrl = `http://127.0.0.1:8093/keys//private`;
const signUrl = `http://127.0.0.1:8093/keys/` + `{id}` + `/private`;

const eschema = buildSchema(`
    type Signature {
        signature: String
        userId: String
        data: String
    }

    type PrivateKey{
        private: String
    }

    type Query {
        getPrivateKey(id: Int): PrivateKey
    }

    type Mutation {
        signData(data: String, userId: String): Signature
    }
`);
const root = {
    getPrivateKey: (id) => {
        const res = "";
        const url = `http://keys_ms:8093/keys/${id.id}/private`;
        return fetch(url, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data=>{ 
            //console.log("data",data); 
            let privateKey = new PrivateKey(data);
            //console.log("privateKey", privateKey);
            return privateKey;
        })

    }
};

class PrivateKey {
    constructor(key) {
        this.private = key;
    }
}

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: eschema,
    rootValue: root,
    graphiql: true,
}));
app.listen(80);
console.log('Runnig server at localhost:80/graphql');