var fetch = require("node-fetch-commonjs");
var express = require('express');
const { graphqlHTTP } = require('express-graphql');
var {buildSchema} = require('graphql');
const keysUrl = `http://127.0.0.1:8093/keys//private`;
const signUrl = `http://127.0.0.1:8093/keys/`+`{id}`+`/private`;

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
    getPrivateKey: ( id ) => {
        const res = "";
        let idToChart = parseInt(id,10);
        const url =`http://127.0.0.1:8093/keys/1/private`;
        console.log(url);
        fetch(url, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
  }
        })
        .then((response) => response.json())
        .then((responseData) => {
         console.log(responseData);
        return "ntrr";
    })

    }
};

class PrivateKey {
    constructor(privates) {
        this.privates = privates;
      }
}

var app = express();
app.use('/graphql',graphqlHTTP({
    schema: eschema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Runnig server at localhost:4000/graphql');