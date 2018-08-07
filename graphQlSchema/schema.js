import {GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString} from 'graphql'
import taskModel from '../grapghQlModel/task'
import {taskList, saveTask, removeTask, editTask} from '../services/task.service';

const rootQuery = new GraphQLObjectType({
   name : 'RootQuery',
   fields: {
       getTaskList : {
             type: GraphQLList(taskModel),
             args: {},
             async resolve(parent, args) {
                 return await taskList()
             }
       }
   }
})

const rootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        addTask : {
            type: taskModel,
            args: {
                name: {type: GraphQLString},
            },
            async resolve(parent, args) {
                return await saveTask(args)
            }
        },
        deleteTask : {
            type: taskModel,
            args: {
                id: {type: GraphQLString},
            },
            async resolve(parent, args) {
                return await removeTask(args.id)
            }
        },
        updateTask : {
            type: taskModel,
            args: {
                id: {type: GraphQLString},
                name: {type: GraphQLString},
                status: {type : GraphQLString}
            },
            async resolve(parent, {id, name, status}) {
                return await editTask(id, {
                    name,
                    status
                })
            }
        }
    }
})

const schema = new GraphQLSchema ({
    query: rootQuery,
    mutation: rootMutation

})

export default schema