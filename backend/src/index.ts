import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {resolvers} from "./graphql/resolvers";

import "dotenv/config";
import {readFileSync} from "fs";

const typeDefs = readFileSync('./src/graphql/schema.graphql', 'utf8')

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
});

console.log(`🚀  Server ready at: ${url}`);