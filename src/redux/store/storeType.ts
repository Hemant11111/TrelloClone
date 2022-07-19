import CardModel from "../../model/Card";
import TaskModel from "../../model/Task";


export interface STORE_TYPE {
    cards: { [key: string]: CardModel },
    tasks: { [key: string]: TaskModel }
}


export interface ROOT_STORE_TYPE {
    cardReducer: CARDS_STATE_TYPE,
    taskReducer: TASKS_STATE_TYPE
}

export interface CARDS_STATE_TYPE {
    cards: { [key: string]: CardModel }
}

export interface TASKS_STATE_TYPE {
    tasks: { [key: string]: TaskModel }
}