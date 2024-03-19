import http from "http";
import { json } from "body-parser";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { app } from "../app";
import { typeDefs } from "../graphql/type-defs";
import { resolvers } from "../graphql/resolvers";
import serverlessExpress, { getCurrentInvoke } from "@codegenie/serverless-express";
/* import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import Keyv from "keyv";
import { handlers, startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import rateLimit from "../middleware/rate-limit";
import routeAuth from "../middleware/route-authz"; */

interface MyContext {
  token?: string;
}

const ALLOW_URLS = ["https://d2a3kv2z6ecrel.cloudfront.net"];

const httpServer = http.createServer(app);

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  /* cache: new KeyvAdapter(new Keyv(`redis://${process.env.REDIS_PUBLIC_URL}`)), */
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});

server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();

app.use(
  "/graphql",
  cors<cors.CorsRequest>({
    origin: ALLOW_URLS,
    methods: ["POST", "GET", "OPTIONS"]
  }),
  json(),
  /* routeAuth,
  rateLimit,*/
  expressMiddleware(server, {
    context: async ({ req, res }) => {
      const { event, context } = getCurrentInvoke();
      event.requestContext = context;
      return {
        expressRequest: req,
        expressResponse: res,
        lambdaEvent: event,
        lambdaContext: context,
        requestObject: req
      };
    }
  })
);

exports.graphqlHandler = serverlessExpress({ app });
