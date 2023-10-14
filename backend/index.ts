import "reflect-metadata";

import { AppDataSource } from "./data-source";
import { buildSchema, buildTypeDefsAndResolvers } from "type-graphql";
import { TodoResolver } from "./src/resolvers/todo.resolver";
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startStandaloneServer } from "@apollo/server/standalone";

// Establish connection with DB
await AppDataSource.initialize()
  .then(async (dataSource) => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log("Error when setting up database connection");
    console.error(err);
  });

// Automatically generate schema.gql
await buildSchema({
  resolvers: [TodoResolver],
  emitSchemaFile: true,
  validate: false,
});

const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
  resolvers: [TodoResolver],
  validate: false,
});

const executableSchema = makeExecutableSchema({ typeDefs, resolvers });

// Spin up Apollo GQL server
const server = new ApolloServer({ schema: executableSchema });

startStandaloneServer(server, { listen: { port: 3000 } }).then(() => {
  console.log("🚀 Server READY");
});
