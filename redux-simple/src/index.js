import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
const initialState = {
    salary: 15000,
    value: []
}

const userReducer = (state={name: "Nattapong", age: 24}, action) => {
    switch (action.type) {
        case "setName":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "setAge":
            state = {
                ...state,
                age: action.payload
            }
            break;
        default:
    }
    return state
}

const employeeSalaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                salary: state.salary += action.payload,
                value: [...state.value, action.payload]
            }
            break;
        case "SUBTRACT":
            state = {
                ...state,
                salary: state.salary -= action.payload,
                value: [...state.value, action.payload]
            }
            break;
        default:
    }
    return state;
}

const myLogger = (store) => (next) => (action) => {
    console.log("Log Action", action);
    next(action);
}
const store = createStore(combineReducers({emp: employeeSalaryReducer, user: userReducer}), {}, applyMiddleware(myLogger));
store.subscribe(() => {
    console.log("Update Store", store.getState());
})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();