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
import { auth } from "express-oauth2-jwt-bearer";
import { GraphQLError } from "graphql";

const PORT = 3000;

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
      context: async ({ req, res }) => {

        const checkJwt = auth({
          audience: `${process.env.AUTH0_AUDIENCE_URL}`,
          issuerBaseURL: `${process.env.AUTH0_URL}`,
          tokenSigningAlg: `${process.env.AUTH0_SIGNING_ALG}`
        });
      
        /* checkJwt(req, res, (err) => {
          if (err) throw new GraphQLError('User is not authenticated', {
            extensions: {
              code: 'UNAUTHENTICATED',
              http: { status: 401 },
            },
          });
        }); */

        let currentTime;
        const isNotIntrospectionQuery = req.body.operationName !== "IntrospectionQuery";
        if(isNotIntrospectionQuery) currentTime = testPerformance();
        return ({ currentTime, requestObject: req })
      },
    }),
  );

  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
  
  console.log(`🚀  Server ready at: http://localhost:3000/graphql`);
};

startServer();