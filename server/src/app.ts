import * as express from "express";
import * as apolloServerExpress from 'apollo-server-express';

const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

class App {
    public app: express.Application;
    public apolloServer: apolloServerExpress.ApolloServer;
    private port: number | string
    constructor(port) {
        this.app = express();
        this.port = port;
        this.apolloServer = new apolloServerExpress.ApolloServer({
            typeDefs,
            resolvers,
            context: () => ({})
        })
          
    }
    start = async () => {
        await this.apolloServer.start();
        this.apolloServer.applyMiddleware({ app: this.app })   
        this.app.listen(this.port, () => {
            console.log(`Server ready at http://localhost:${this.port}/${this.apolloServer.graphqlPath}`)
        })
    }

}

export default App;