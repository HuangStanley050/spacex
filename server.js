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

const port = process.env.port || 8081;

app.listen(port, () => console.log("server running"));
