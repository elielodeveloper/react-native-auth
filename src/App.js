import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA1w2i6oYdJO0tnjHZnxSNY5X1Zch-8mM0',
      authDomain: 'auth-react-native-453ef.firebaseapp.com',
      databaseURL: 'https://auth-react-native-453ef.firebaseio.com',
      projectId: 'auth-react-native-453ef',
      storageBucket: 'auth-react-native-453ef.appspot.com',
      messagingSenderId: '111041759651'      
    });

  
  }


  render() {
    console.log(this.state.loggedIn);
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm/>
      </View>
    )
  }
}

export default App;
