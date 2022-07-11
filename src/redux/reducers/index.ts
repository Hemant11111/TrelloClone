import { combineReducers } from "redux";

import cardReducer from "./card.reducer";
import taskReducer from "./task.reducer";


const rootReducer = combineReducers({
    cardReducer,
    taskReducer
});

export default rootReducer;
