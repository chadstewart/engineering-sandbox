import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "../graphql/type-defs";
import { resolvers } from "../graphql/resolvers";

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 }
    });
    
    console.log(`🚀  Server ready at: ${url}`);
};

startServer();