import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase'
import { Header, Button, Spinner } from './components/common';
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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()} text="Log out" />
        );
      case false:
        return <LoginForm />
      default:
        return (
          <Spinner size="large"/>
        );
    }
  }

  render() {
    console.log(this.state.loggedIn);
    return (
      <View>
        <Header headerText="Authentication" />
        <View style={{marginTop: '50%'}} >
          {this.renderContent()}
        </View>
      </View>
    )
  }
}

export default App;
