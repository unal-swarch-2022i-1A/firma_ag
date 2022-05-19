const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js')
const root = require('./resolvers.js')

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema.eschema,
  rootValue: root.root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');