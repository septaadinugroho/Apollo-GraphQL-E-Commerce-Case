const express = require("express");
const path = require("path");
//const { buildSchema } = require("graphql");
//const { graphqlHTTP } = require("express-graphql");
const { ApolloServer } = require("apollo-server-express");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

// const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

//get the products and orders data from the resolvers
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

async function startApolloServer() {
  const app = express();
  const schema = makeExecutableSchema({
    typeDefs: typesArray, //schemanya
    //resolvers
    resolvers: resolversArray,
    // {
    //   Query: {
    //     products: async (parent) => {
    //       console.log("Getting the products...");
    //       const productResolve = await Promise.resolve(parent.products);
    //       return productResolve;
    //     },
    //     orders: (parent) => {
    //       console.log("Getting orders...");
    //       return parent.orders;
    //     },
    //   },
    // },
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`Running GraphQL server on PORT ${PORT}`);
  });
}

startApolloServer();

// const root = {
//   products: require("./products/products.model"),
//   orders: require("./orders/orders.model"),
// };

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     //rootValue: root,
//     graphiql: true, //supaya interface graphql nongol
//   })
// );
