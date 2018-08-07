import Hapi from 'hapi';
import mongoose from 'mongoose';

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



server.route([...taskRoute])

server.start();