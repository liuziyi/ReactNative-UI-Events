import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import styles from '../styles';

class AuthLoadingScreen extends Component {

  constructor(){
    super()
    this.loadApp()
  }

  loadApp = async() => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
      </View>
    )
  }
}

export default AuthLoadingScreen;
