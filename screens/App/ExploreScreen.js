import React, { Component } from 'react';
import { Container, Header, Item, Icon, Input, Text, Button, Content, List, ListItem, Body, Left, Right, Thumbnail } from 'native-base'

class ExploreScreen extends Component {

  render(){
    return(
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input/>
          </Item>
          <Button bordered dark small style={{ marginLeft: 5 }}>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/logos/f1.png')} />
              </Left>
              <Body>
                <Text>Formula 1 World Championship</Text>
                <Text note>Auto Racing</Text>
              </Body>
              <Right>
                <Button dark small><Text>Follow</Text></Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/logos/epl.png')} />
              </Left>
              <Body>
                <Text>English Premier League</Text>
                <Text note>Football</Text>
              </Body>
              <Right>
                <Button dark small><Text>Follow</Text></Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/logos/nba.png')} />
              </Left>
              <Body>
                <Text>NBA Playoffs</Text>
                <Text note>Basketball</Text>
              </Body>
              <Right>
                <Button dark small><Text>Follow</Text></Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/logos/majors.jpg')} />
              </Left>
              <Body>
                <Text>The Majors</Text>
                <Text note>Golf</Text>
              </Body>
              <Right>
                <Button dark small><Text>Follow</Text></Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/logos/gs.jpg')} />
              </Left>
              <Body>
                <Text>Tennis Grand Slams</Text>
                <Text note>Tennis</Text>
              </Body>
              <Right>
                <Button dark small><Text>Follow</Text></Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/logos/tdf.png')} />
              </Left>
              <Body>
                <Text>Tour de France</Text>
                <Text note>Cycling</Text>
              </Body>
              <Right>
                <Button dark small><Text>Follow</Text></Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/logos/nfl.jpg')} />
              </Left>
              <Body>
                <Text>NFL Playoffs</Text>
                <Text note>American Football</Text>
              </Body>
              <Right>
                <Button dark small><Text>Follow</Text></Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/logos/mlb.jpg')} />
              </Left>
              <Body>
                <Text>MLB Playoffs</Text>
                <Text note>Baseball</Text>
              </Body>
              <Right>
                <Button dark small><Text>Follow</Text></Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

export default ExploreScreen;
