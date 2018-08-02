
import { saveTask } from '../../services/user.service';
const Joi = require('joi');



server.route({
    method: 'POST',
    path: '/addTask',
    
    handler: function (request, reply) {

        // Create mongodb user object to save it into database
        var task = request.payload;

        // Call save methods to save data into database
        // and pass callback methods to handle error
        saveTask(function (error) {
            if (error) {
                reply({
                    statusCode: 503,
                    message: error
                });
            } else {
                reply({
                    statusCode: 201,
                    message: 'Task Saved Successfully'
                });
            }
        });
    },
    config: {
        // We use Joi plugin to validate request
        validate: {
            payload: {
                // Both name and age are required fields
                name: Joi.string().required()
            }
        }
    },
});