import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from "redux-thunk";

const reducer = combineReducers({

})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;