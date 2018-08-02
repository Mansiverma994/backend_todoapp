const Hapi = require('hapi');
const mongoose = require('mongoose');
const taskRouter = require('./routes/task/');
const saveTask = require('./services/task.service');
const Joi = require('joi');
const taskModel = require('./models/task.model');


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
    path: '/addTask',
    config: {
        validate: {
            payload: {
                name: Joi.string().required()
            }
        }
    },
   
    handler: async function (request, h) {
        var task = new taskModel(request.payload);
        
        return await task.save()
        }
});

// Fetching all tasks
server.route({
    method: 'GET',
    path: '/allTask',
    handler: async function (h) {

        var task = new taskModel();
      var data  = task.find();
        return await data;
    }
    
});


server.start();