import { createStore, compose } from "redux";
import resultReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(resultReducer, composeEnhancers());

export default store;
