import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCVPQKzbJgsfOd83WGyo2KhDpzND55c3kU',
            authDomain: 'auth-ae3ec.firebaseapp.com',
            databaseURL: 'https://auth-ae3ec.firebaseio.com',
            projectId: 'auth-ae3ec',
            storageBucket: 'auth-ae3ec.appspot.com',
            messagingSenderId: '783206901460'
        });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <View style={{ height: 40 }}>
                    <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                </View>
                );
            case false:
                return <LoginForm />;
            default:
                return <View style={{ height: 40 }}><Spinner size='large' /></View>;
        }
    }
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
    
}

export { App };
