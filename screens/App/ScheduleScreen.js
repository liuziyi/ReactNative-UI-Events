import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Body, Left, Right, Content, Text, Button, Icon } from 'native-base'

class ScheduleScreen extends Component {

  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button iconLeft transparent dark onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Text>Schedule</Text>
          </Body>
          <Right></Right>
        </Header>
        <Content style={{ padding: 20 }}>
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontWeight: "900" }}>Day 1</Text>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock
            </Text>
          </View>
          <View>
            <Text style={{ fontWeight: "900" }}>Day 2</Text>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock
            </Text>
          </View>
        </Content>
      </Container>
    )
  }
}

export default ScheduleScreen;
