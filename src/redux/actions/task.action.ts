import TaskModel from "../../model/Task";
import { CREATE_TASK, DELETE_TASK, EDIT_TASK, TASK_MOVED } from "./actionTypes";

export function createTaskAction(task: TaskModel) {
    return {
        type: CREATE_TASK,
        task
    }
}

export function deleteTaskAction(taskId: string) {
    return {
        type: DELETE_TASK,
        taskId
    }
}


export function editTaskAction(task: TaskModel) {
    return {
        type: EDIT_TASK, task
    }
}


export function taskMovedToAnotherCardAction(taskId: string, cardId :string) {
    return {
        type: TASK_MOVED, taskId, cardId
    }
}