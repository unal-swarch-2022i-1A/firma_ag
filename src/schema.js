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

    type User {
        userId: Int
        firstName: String
        lastName: String
        email: String
        password: String
    }

    type Document {
        docId: Int
        name: String
        folder: Int
    }

    type Query {
        getPrivateKey(id: Int): String
        getPublicKey(id: Int): String
        hello: String

        getUser(id: Int): User
        getUserByEmail(email: String): User

        getDoc(id: Int): Document
        
    }

    type Mutation {
        generateUserKeys(id: Int): RestStatus
        reGenerateUserKeys(id: Int): RestStatus
        deleteUserKeys(id: Int): RestStatus

        createUser(firstName: String, lastName: String, email: String, password: String): RestStatus
        updateUser(id: Int, firstName: String, lastName: String, email: String, password: String): User
        deleteUser(id: Int): RestStatus

        signData(data: String, userId: String): Signature
    }
`);

exports.eschema = eschema;
