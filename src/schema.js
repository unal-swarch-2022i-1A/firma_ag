var { buildSchema } = require('graphql');

//Construct a schema, using GraphQL schema language
const eschema = buildSchema(`
    type Signature {
        signature: String
        userId: String
        data: String
    }

    type RestStatus {
        httpCode: Int
        httpMessage: String
    }

    type Query {
        getPrivateKey(id: Int): String
        getPublicKey(id: Int): String
        hello: String
    }

    type Mutation {
        generateUserKeys(id: Int): RestStatus
        reGenerateUserKeys(id: Int): RestStatus
        deleteUserKeys(id: Int): RestStatus
        signData(data: String, userId: String): Signature

    }
`);

exports.eschema = eschema;