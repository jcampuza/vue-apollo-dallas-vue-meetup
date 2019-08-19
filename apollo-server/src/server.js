const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const { typeDefs, resolvers, context } = require("./graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

const app = express();
app.use(cors());
// app.use((req, res, next) => setTimeout(next, 5000));
server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(
    `server listenting at http://localhost:4000${server.graphqlPath}`
  );
});
