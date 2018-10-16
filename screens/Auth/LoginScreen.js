import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Button, Text } from 'native-base';
import styles from '../../styles';

class LoginScreen extends Component {

  login = async() => {
    await AsyncStorage.setItem('userToken', 'ziyi');
    this.props.navigation.navigate('App');
  }

  render(){
    return(
      <View style={styles.container}>
        <Button dark onPress={this.login} style={{ marginLeft: 100 }}>
          <Text>Complete Sign In</Text>
        </Button>
      </View>
    )
  }
}

export default LoginScreen;
