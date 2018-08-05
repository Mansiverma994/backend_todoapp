import {GraphQLSchema, GraphQLObjectType, GraphQLList} from 'graphql'
import taskModel from '../grapghQlModel/task'
import {taskList, saveTask, removeTask} from '../services/task.service';

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
            args: {},
            async resolve(parent, args) {
                return {name: 'prince', id: '123'}
            }
        }
    }
})

const schema = new GraphQLSchema ({
    query: rootQuery,
    mutation: rootMutation

})

export default schema