const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const schema = require("./schema.js"); //dummy value for now

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(8081, () => console.log("server running"));
