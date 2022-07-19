import {
    createTaskAction,
    deleteTaskAction,
    editTaskAction,
    taskMovedToAnotherCardAction
} from "../actions/task.action";
import TaskModel from "../../model/Task";

export const createTaskThunk: any = (task: TaskModel) => async function (dispatch: any, state: any) {
    const {cardReducer: {cards}} = state();
    if (!cards[task.cardId]) {
        return;
    }
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

export const taskMovedToAnotherCardThunk: any = (taskId: string, cardId: string) => async function (dispatch: any, state: any) {
    const {cardReducer: {cards}, taskReducer: {tasks}} = state();
    if (!cards[cardId]) {
        return;
    }

    const task = tasks[taskId];
    if (task.cardId === cardId) {
        return;
    }
    dispatch(taskMovedToAnotherCardAction(taskId, task.cardId, cardId));
}