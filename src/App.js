import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDsiiIvdducKYQLlW6pp0vqPr--fQsad3M',
            authDomain: 'manager-df466.firebaseapp.com',
            databaseURL: 'https://manager-df466.firebaseio.com',
            projectId: 'manager-df466',
            storageBucket: 'manager-df466.appspot.com',
            messagingSenderId: '901002439260'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}
export default App;
