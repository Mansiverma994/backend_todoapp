
const taskModel = require('../models/task.model');

function saveTask(data, callback) {
    new taskModel(data).save(callback)
}

// const saveTask = function(data, callback) {
//     console.log(data);
//     new taskModel(data).save(callback)
// }

// module.exports = saveTask;
module.exports.saveTask = saveTask;  