import React, { Component } from 'react';
import { Text } from 'react-native'; 
import * as firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress = () => {
    const { email, password } = this.state;
    
    this.setState({ error: '', loading: true });

    //Trying to sign in
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        //Trying to create a new account
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  }

  onLoginFail = () => {
    console.log("falhou")
    this.setState({ error: 'Auhentication Failed', loading: false })
  }

  onLoginSuccess = () => {
    //This method aims
   //Clear out any error messages that are on the screen
   // Setting loading to false
   //Clean the form
   console.log("logou/criou");
   this.setState({
    email: '',
    password: '',
    loading: false,
    error: ''
   });
  }

  renderButton = () => {
    //Aims to return or the button or the spinner
    if (this.state.loading)
      return <Spinner size="small"/>

    return(
      <Button onPress={this.onButtonPress} text="Log in" />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="username@gmail.com"
            label="Email:"
            value={this.state.email} 
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="password"
            label="Password:"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
}

export default LoginForm;
