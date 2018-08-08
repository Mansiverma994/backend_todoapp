import {GraphQLObjectType, GraphQLString} from 'graphql'

const taskModel = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        status: {type: GraphQLString}
    })
})

export default taskModel;
