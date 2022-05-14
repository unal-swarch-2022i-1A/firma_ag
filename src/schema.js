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

    type Query {
        getPrivateKey(id: Int): String
    }

    type Mutation {
        signData(data: String, userId: String): Signature
    }
`);
const root = {
    getPrivateKey: (id) => {
        console.log("Entra al metodo");
        const res = "";
        const url = `http://127.0.0.1:8093/keys/1/private`;
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
            console.log("privateKeyObject", privateKey);
            console.log("privateKey", privateKey.key);
            return "sds"//privateKey.key;
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
app.listen(4000);
console.log('Runnig server at localhost:80/graphql');