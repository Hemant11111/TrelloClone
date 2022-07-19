import { CREATE_TASK, DELETE_TASK, EDIT_TASK, MOVE_TASK } from "../actions/actionTypes";
import { TASKS_STATE_TYPE } from "../store/storeType";


export const taskInitialState: TASKS_STATE_TYPE = {
    tasks: {}
}
const taskReducer = (state = taskInitialState, action: any) => {
    let {tasks} = state;
    const {type} = action;
    switch (type) {
        case CREATE_TASK:
            return {...state, tasks: {...tasks, [action.task.id]: action.task}};
        case EDIT_TASK:
            return {...state, tasks: {...tasks, [action.task.id]: {...tasks[action.task.id], ...action.task}}};
        case DELETE_TASK:
            return {...state, tasks: {...tasks, [action.taskId]: {...tasks[action.taskId], deleted: true}}};
        case MOVE_TASK:
            const task = state.tasks[action.taskId];
            return {
                ...state,
                tasks: {...tasks, [action.taskId]: {...task, cardId: action.toCardId}}
            };
        default:
            return state;
    }
};

export default taskReducer;
