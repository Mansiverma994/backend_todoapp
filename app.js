import Hapi from 'hapi';
import mongoose from 'mongoose';
import taskRouter from './routes/task/';
import saveTask from './services/task.service';
import Joi from 'joi';
import taskModel from './models/task.model';



// Create server with host and port 

const server = Hapi.server({
    host: '127.0.0.1',
    port: 8000
});

mongoose.connect('mongodb://127.0.0.1:27017/todoapp', { useNewUrlParser: true }, function (err) {
    if (err) throw err;
  console.log('Mongo Db successfully connected');

});

server.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {

        return'hello world';
    }
});

//Add task
server.route({
    method: 'POST',
    path: '/',
    config: {
        validate: {
            payload: {
                name: Joi.string().required()
            }
        }
    },
   
    handler: async function (request, h) {
        const task = new taskModel(request.payload);
        
        return await task.save()
        }
});

// Fetching all tasks
server.route({
    method: 'GET',
    path: '/',
    handler: async function (h) {
        const data  = await taskModel.find();
        return  data;
    }

});
//Delete task
server.route({
    method: 'DELETE',
    path: '/{id}',
    handler: async function (request, reply) {
        return await taskModel.remove({_id: request.params.id});
    }
});

//Update task


server.route({
    method: 'PUT',
    path: '/{id}',
    config: {
        validate: {
            payload: {
                name: Joi.string(),

                // status:Joi.string()
}
            // payload: Joi.object({
            //     title: Joi.string().min(10).max(50).optional(),
            //     author: Joi.string().min(10).max(50).optional(),
            //     isbn: Joi.number().optional()
            // }).required().min(1)
        }
    },
    handler: async function (request, reply) {

        return await taskModel.update({
            _id: request.params.id
        }, {
            $set: request.payload
        });
    }
});

server.start();