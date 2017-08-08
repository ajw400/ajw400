import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCFHzAXo0LNh8KB_UW0klWuUHhxQi1FBNQ",
      authDomain: "authentication-f377c.firebaseapp.com",
      databaseURL: "https://authentication-f377c.firebaseio.com",
      projectId: "authentication-f377c",
      storageBucket: "authentication-f377c.appspot.com",
      messagingSenderId: "930657748111"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

