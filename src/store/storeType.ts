import CardModel from "../model/Card";
import TaskModel from "../model/Task";


export interface STORE_TYPE {
    cards: { [key: string]: CardModel },
    tasks: { [key: string]: TaskModel }
}


export interface ROOT_STORE_TYPE {
    cardReducer: { cards: { [key: string]: CardModel } },
    taskReducer: { tasks: { [key: string]: TaskModel } }
}
