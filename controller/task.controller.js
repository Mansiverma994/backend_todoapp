// import {listTasks as lists, addTask as saveTask, deleteTask as removeTask} from '../services/task.service';
import {taskList, saveTask, removeTask, editTask} from '../services/task.service';

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