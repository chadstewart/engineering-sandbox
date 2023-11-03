import http from "http";
import { json } from "body-parser";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { app } from "../app";
import { typeDefs } from "../graphql/type-defs";
import { resolvers } from "../graphql/resolvers";
import { testPerformance } from "../lib/util/performance-test";

const PORT = 4000;

interface MyContext {
  token?: string;
};

const startServer = async () => {
  const httpServer = http.createServer(app);
  
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        let currentTime;
        const isNotIntrospectionQuery = req.body.operationName !== "IntrospectionQuery";
        if(isNotIntrospectionQuery) currentTime = testPerformance();
        return ({ token: req.headers.token, currentTime, requestBody: req.body })
      },
    }),
  );

  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
  
  console.log(`🚀  Server ready at: http://localhost:4000/graphql`);
};

startServer();