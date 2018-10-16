import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import {
  Container,
  Header,
  Body,
  Left,
  Right,
  Content,
  Form,
  Picker,
  Text,
  Button,
  Icon
} from 'native-base';
import EventComponent from '../../components/Home/EventComponent';
import PostInputComponent from '../../components/Home/PostInputComponent';
import PostComponent from '../../components/Home/PostComponent';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Icon
              name="md-menu"
              style={{ color: 'black', paddingLeft: 10 }}
              onPress={() => this.props.navigation.toggleDrawer()}
            />
          </Left>
          <Body>
            <Form>
              <Picker
                mode="dropdown"
                iosHeader="Your Events"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="All" value="key0" />
                <Picker.Item label="Olympic Games" value="key1" />
                <Picker.Item label="FIFA World Cup" value="key2" />
                <Picker.Item label="Cricket World Cup" value="key3" />
                <Picker.Item label="Rugby World Cup" value="key4" />
              </Picker>
            </Form>
          </Body>
          <Right></Right>
        </Header>
        <Content style={{ padding: 10 }}>
          <ScrollView scrollEventThrottle={16}>
            <View>
              <Text style={{ color: 'grey', paddingLeft: 5 }}>Suggestions</Text>
            </View>
            <View style={{ height: 130, marginTop: 10 }}>
              <ScrollView horizontal={true}>
                <EventComponent/>
                <EventComponent/>
                <EventComponent/>
              </ScrollView>
            </View>
          </ScrollView>
          <PostInputComponent/>
          <PostComponent/>
        </Content>
      </Container>
    )
  }
}

export default HomeScreen;
