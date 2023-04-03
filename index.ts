import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import typeDefs  from './src/graphql/typeDefs';
import resolvers  from './src/graphql/resolvers';
require("dotenv").config();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(process.env.DB_CONNECTION!)  
    .then(() => {
        console.log("Database Connected with Success")
        return server.listen({port: 4000})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })