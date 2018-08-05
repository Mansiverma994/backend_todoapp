import {GraphQLObjectType, GraphQLString} from 'graphql'

const taskModel = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
    })
})

export default taskModel;


// function getData() {
//     return {
//         name: 'prince'
//     }
// }
//
// const getData = () => ({
//         name: 'prince'
// })