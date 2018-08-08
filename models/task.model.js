import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {type: String},
    status: {type: String, enum: ['Pending', 'Completed'], default: 'Pending'}
});

const task = mongoose.model("task", taskSchema)
export default task;

