import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from '../../styles';

class WelcomeScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Button title="Register" onPress={() => this.props.navigation.navigate('Register')}/>
        <Button title="Login" onPress={() => this.props.navigation.navigate('Login')}/>
      </View>
    )
  }
}

export default WelcomeScreen;
