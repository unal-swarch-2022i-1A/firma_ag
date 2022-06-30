const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./presentation/schema.js')
const root = require('./presentation/resolvers.js')
const {port, env, endpoints} = require('./config.js')

var app = express();
app.use('/', graphqlHTTP({
  schema: schema.schema,
  rootValue: root.root,
  graphiql: env.development,
}));
app.listen(port);
console.log(`Running GraphQL API server (${env.production?"production":"development"}) at http://localhost:${port}/`);
if (env.development) {
  console.log("API MS endpoints:",endpoints)
}