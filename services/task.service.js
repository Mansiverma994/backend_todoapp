import taskModel from '../models/task.model';

export async function taskList() {
    return await taskModel.find();
}

export async function taskListById(id) {
    return await taskModel.find({_id: id});
}

export async function saveTask(postData) {
    const task = new taskModel(postData);
    return await task.save()
}

export async function removeTask(id) {
    return await taskModel.remove({_id: id});

}
export async function editTask(id, data) {
    return await taskModel.update({_id: id}, {$set: data});
}