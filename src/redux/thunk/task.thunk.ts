import { createTaskAction, deleteTaskAction, editTaskAction } from "../actions/task.action";
import TaskModel from "../../model/Task";

export const createTaskThunk: any = (task: TaskModel) => async function (dispatch: any, state: any) {
    // Call API
    dispatch(createTaskAction(task));
}

export const deleteTaskThunk: any = (taskId: string) => async function (dispatch: any, state: any) {
    // Call API
    dispatch(deleteTaskAction(taskId));
}

export const editTaskThunk: any = (task: TaskModel) => async function (dispatch: any, state: any) {
    // Call API
    dispatch(editTaskAction(task));
}