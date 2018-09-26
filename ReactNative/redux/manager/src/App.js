import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCpB_I7PsiNu_7gCndg_iCTZk_V14jmFUU',
            authDomain: 'manager-f2b2b.firebaseapp.com',
            databaseURL: 'https://manager-f2b2b.firebaseio.com',
            projectId: 'manager-f2b2b',
            storageBucket: 'manager-f2b2b.appspot.com',
            messagingSenderId: '220438595532'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
