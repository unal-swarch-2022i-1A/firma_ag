var { buildSchema } = require('graphql');

//Construct a schema, using GraphQL schema language
const eschema = buildSchema(`
    type Signature {
        signature: String
        userId: String
        data: String
    }

    type Query {
        getPrivateKey(id: Int): String
        hello: String
    }

    type Mutation {
        signData(data: String, userId: String): Signature
    }
`);

exports.eschema = eschema;