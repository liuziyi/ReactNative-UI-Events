import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import { Container, Header, Body, Left, Right, Button, Text, Content, Icon, Tabs, Tab, TabHeading } from 'native-base';
import UpcomingEventComponent from '../../components/Profile/UpcomingEventComponent';
import PastEventComponent from '../../components/Profile/PastEventComponent';

class ProfileScreen extends Component {

  logout = async() => {
    AsyncStorage.clear()
    this.props.navigation.navigate('AuthLoading')
  }

  render(){
    return(
      <Container>
        <Header>
          <Left></Left>
          <Body><Text>Profile</Text></Body>
          <Right>
            <Button dark transparent onPress={this.logout}><Text>Logout</Text></Button>
          </Right>
        </Header>
        <Content>
          <View style={{ paddingTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center', paddingLeft: 10 }}>
                <Image
                  source={require('../../assets/logos/f1.png')}
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ fontWeight: "900" }}>F1</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text>10</Text>
                    <Text>Upcoming</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>2</Text>
                    <Text>Past</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
              <Text>info@sta.com</Text>
              <Text>www.sta.com</Text>
              <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                <Icon type="FontAwesome" name="facebook-square" />
                <Icon type="FontAwesome" name="twitter-square" style={{ paddingLeft: 5 }}/>
                <Icon type="FontAwesome" name="instagram" style={{ paddingLeft: 5 }}/>
              </View>
            </View>
          </View>
          <Tabs tabBarUnderlineStyle={{ backgroundColor: 'black' }}>
            <Tab heading={ <TabHeading style={{ backgroundColor: 'white' }}><Text style={{ color: 'black' }}>Upcoming Events</Text></TabHeading>}>
              <UpcomingEventComponent/>
            </Tab>
            <Tab heading={ <TabHeading style={{ backgroundColor: 'white' }}><Text style={{ color: 'black' }}>Past Events</Text></TabHeading>}>
              <PastEventComponent/>
            </Tab>
          </Tabs>
        </Content>
      </Container>
    )
  }
}

export default ProfileScreen;
