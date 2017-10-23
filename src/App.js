import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Card, CardSection, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC15UdAZl55hagH_9EgmuMrI-BhvoASFlI",
      authDomain: "authentication-fcc09.firebaseapp.com",
      databaseURL: "https://authentication-fcc09.firebaseio.com",
      projectId: "authentication-fcc09",
      storageBucket: "authentication-fcc09.appspot.com",
      messagingSenderId: "205040044128"
    });

    firebase.auth().onAuthStateChanged((user) => {
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
          <Card>
          <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          </CardSection>    
          </Card>  
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;