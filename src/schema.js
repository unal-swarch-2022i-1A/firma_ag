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
        docId: String
        title: String
        author: String
    }

    type Query {
        getPrivateKey(id: Int): String
        getPublicKey(id: Int): String
        hello: String

        getUser(id: Int): User
        getUserByEmail(email: String): User

        getDoc(id: String): Document
        
    }

    type Mutation {
        generateUserKeys(id: Int): RestStatus
        reGenerateUserKeys(id: Int): RestStatus
        deleteUserKeys(id: Int): RestStatus

        createUser(firstName: String, lastName: String, email: String, password: String): RestStatus
        updateUser(id: Int, firstName: String, lastName: String, email: String, password: String): User
        deleteUser(id: Int): RestStatus

        signData(data: String, userId: String): Signature

        createDoc(title: String, author: String): Document
    }
`);

exports.eschema = eschema;
