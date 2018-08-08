import Hapi from 'hapi';
import mongoose from 'mongoose';
import {graphqlHapi, graphiqlHapi} from 'apollo-server-hapi';

import schema from './graphQlSchema/schema'
import taskRoute from './routes/task'
import config from './config'

// Create server with host and port
const server = Hapi.server({
    host: config.host,
    port: config.port,
    "routes": {
        "cors": {
            origin: ["*"],
            headers: ["Accept", "Content-Type"],
            additionalHeaders: ["X-Requested-With"]
        }
    }
});

mongoose.connect(config.mongoUrl, {useNewUrlParser: true}, (err) => {
    if (err) throw err;
    console.log('Mongo Db successfully connected');

});
const startServer = async() => {

    await server.register({
        plugin: graphiqlHapi,
        options: {
            path: '/graphiql',
            graphiqlOptions: {
                endpointURL: '/graphql'
            },
            route: {
                cors: true
            }
        }
    });
    await server.register({
        plugin: graphqlHapi,
        options: {
            path: '/graphql',
            graphqlOptions: {
                schema: schema
            },
            route: {
                cors: true
            }
        }
    });

    await server.route([...taskRoute])
    await server.start();


}

startServer()
