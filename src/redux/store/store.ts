import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from "../reducers";

function configureStore(preloadedState: any) {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];

    const composedEnhancer = composeWithDevTools(...storeEnhancers);

    return createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );
}

const store = configureStore({});

export default store;