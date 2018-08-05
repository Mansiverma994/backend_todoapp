import Joi from 'joi';
import {listTasks, addTask, deleteTask, updateTask} from '../controller/task.controller'

const route = [
    {
        method: 'GET',
        path: '/health',
        handler: function (request, h) {
            return 'Success';
        }
    },
    {
        method: 'POST',
        path: '/',
        config: {
            validate: {
                payload: {
                    name: Joi.string().required()
                }
            }
        },
        handler: async(request, h) => {
            return addTask(request.payload);
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: async(h) => {
            return listTasks();
        }

    },
    {
        method: 'PUT',
        path: '/{id}',
        config: {
            validate: {
                payload: {
                    name: Joi.string(),
                    status: Joi.string()
                }
            }
        },
        handler: async(request, reply) => {
console.log(request.payload)
            return updateTask(request.params.id, request.payload);
        }
    },
    {
        method: 'DELETE',
        path: '/{id}',
        handler: async(request, reply) => {
            return deleteTask(request.params.id);
        }
    }
]
export default route