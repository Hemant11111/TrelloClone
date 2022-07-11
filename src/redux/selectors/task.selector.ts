import { createSelector } from "reselect";
import { ROOT_STORE_TYPE } from "../../store/storeType";

export const getTaskReducer = (rootStore: ROOT_STORE_TYPE) => {
    return rootStore.taskReducer;
}

const getTasks = createSelector(getTaskReducer, data => {
    return data.tasks ?? {}
});

const getAllTaskList = createSelector(getTasks, tasks => {
    return Object.values(tasks)
});

export const getTaskList = createSelector(getAllTaskList, tasks => {
    return tasks.filter(task => !task.deleted)
});

export const getTaskListByCardId = (id: string) => createSelector(getAllTaskList, tasks => {
    return tasks.filter(task => !task.deleted && task.cardId === id)
});
