import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from 'native-base';

class EventComponent extends Component {
  render(){
    return(
      <View style={{ height: 130, width: 130, borderWidth: 0.5, borderColor: '#787878', marginLeft: 10 }}>
        <View style={{ flex: 2}}>
          <Image
            source={require('../../assets/logos/f1.png')}
            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
          />
          <Text style={{ fontSize: 14, textAlign: 'center' }}>F1</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", paddingTop: 5 }}>
          <Button small dark>
            <Text>Follow</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default EventComponent;
