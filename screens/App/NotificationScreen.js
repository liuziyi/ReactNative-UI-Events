import React, { Component } from 'react';
import { Container, Header, Body, Content, Card, CardItem, Left, Thumbnail, Text } from 'native-base'

class NotificationScreen extends Component {

  render(){
    return(
      <Container>
        <Header>
          <Body><Text>Notifications</Text></Body>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../assets/logos/olympics.png')}/>
                <Body>
                  <Text>
                    <Text style={{ fontWeight: "900" }}>Olympics</Text>{" "}
                    created a new event.
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default NotificationScreen;
