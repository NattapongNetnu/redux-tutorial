import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CommentReducer from './CommentReducer';

const store = createStore(CommentReducer);
store.subscribe(() => {
    console.log("Update Store", store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
