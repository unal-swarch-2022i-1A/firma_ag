var { buildSchema } = require('graphql');

//Construct a schema, using GraphQL schema language
const schema = buildSchema(`
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

        createUser(firstName: String, lastName: String, email: String, password: String): RestStatus
        updateUser(id: Int, firstName: String, lastName: String, email: String, password: String): User
        deleteUser(id: Int): RestStatus

        signData(userId: String, data: String): Signature

        createDoc(title: String, author: String): Document
    }
`);

exports.schema = schema;
