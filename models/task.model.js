// import mongoose from 'mongoose';
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let taskSchema = new Schema({
    name: {type: String},
    // status: {type: String, enum: ['Active', 'Deactive'], default: 'Active'}
});


var task = mongoose.model("task", taskSchema)


module.exports = task; 