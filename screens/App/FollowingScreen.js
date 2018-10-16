import React, { Component } from 'react';
import { Container, Header, Body, Text, Content, List, ListItem, Left, Right, Thumbnail, Button } from 'native-base';

class FollowingScreen extends Component {

  render(){
    return(
      <Container>
        <Header>
          <Body><Text>Following</Text></Body>
        </Header>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/logos/olympics.png')} />
              </Left>
              <Body>
                <Text>Olympic Games</Text>
                <Text note>Sports</Text>
              </Body>
              <Right>
                <Button bordered dark small><Text>Following</Text></Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/logos/fifa.png')} />
              </Left>
              <Body>
                <Text>FIFA World Cup</Text>
                <Text note>Football</Text>
              </Body>
              <Right>
                <Button bordered dark small><Text>Following</Text></Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/logos/cricket.png')} />
              </Left>
              <Body>
                <Text>Cricket World Cup</Text>
                <Text note>Cricket</Text>
              </Body>
              <Right>
                <Button bordered dark small><Text>Following</Text></Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/logos/rugby.png')} />
              </Left>
              <Body>
                <Text>Rugby World Cup</Text>
                <Text note>Rugby</Text>
              </Body>
              <Right>
                <Button bordered dark small><Text>Following</Text></Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

export default FollowingScreen;
