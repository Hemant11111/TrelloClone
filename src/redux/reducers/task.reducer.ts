import { CREATE_TASK, DELETE_TASK, EDIT_TASK, TASK_MOVED } from "../actions/actionTypes";
import { DEFAULT_STORE } from "../../store/defaultStore";


const taskReducer = (state = DEFAULT_STORE, action: any) => {
    let {tasks} = state;
    const {type} = action;
    switch (type) {
        case CREATE_TASK:
            return {...state, tasks: {...tasks, [action.task.id]: action.task}};
        case EDIT_TASK:
            return {...state, tasks: {...tasks, [action.task.id]: {...tasks[action.task.id], ...action.task}}};
        case DELETE_TASK:
            return {...state, tasks: {...tasks, [action.taskId]: {...tasks[action.taskId], deleted: true}}};
        case TASK_MOVED:
            return {...state, tasks: {...tasks, [action.taskId]: {...tasks[action.taskId], cardId: action.cardId}}};
        default:
            return state;
    }
};

export default taskReducer;
