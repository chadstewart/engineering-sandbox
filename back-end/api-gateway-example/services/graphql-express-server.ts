import http from "http";
import { json } from "body-parser";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { app } from "../app";
import { typeDefs } from "../graphql/type-defs";
import { resolvers } from "../graphql/resolvers";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import Keyv from "keyv";
/* import rateLimit from "../middleware/rate-limit";
import routeAuth from "../middleware/route-authz"; */

const PORT = 3000;

interface MyContext {
  token?: string;
}

const ALLOW_URLS = ["http://172.20.0.2:4000", "http://localhost:4000"];

const startServer = async () => {
  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    cache: new KeyvAdapter(new Keyv(`redis://${process.env.REDIS_PUBLIC_URL}`)),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: ALLOW_URLS
    }),
    json(),
    /* routeAuth,
    rateLimit,*/
    expressMiddleware(server, {
      context: async ({ req }) => {
        return { requestObject: req };
      }
    })
  );

  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));

  console.log(`🚀  Server ready at: http://localhost:${PORT}/graphql`);
};

startServer();
