import TaskModel from "../../model/Task";
import { CREATE_TASK, DELETE_TASK, EDIT_TASK, MOVE_TASK } from "./actionTypes";

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


export function taskMovedToAnotherCardAction(taskId: string, fromCardId: string, toCardId: string) {
    return {
        type: MOVE_TASK, taskId, fromCardId, toCardId
    }
}