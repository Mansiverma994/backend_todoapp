import {taskList, saveTask, removeTask, editTask, taskListById} from '../services/task.service';

export async function listTasks() {
    return await taskList();
}

export async function addTask(payload) {
    return await saveTask(payload);
}
export async function deleteTask(id) {
    return await removeTask(id);
}

export async function updateTask(id, data) {
    return await editTask(id, data);
}
export async function getTaskById(id) {
    return await taskListById(id);
}