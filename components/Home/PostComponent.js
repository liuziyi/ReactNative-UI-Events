import React, { Component } from 'react';
import { Card, CardItem, Thumbnail, Body, Left, Text, Button, Icon } from 'native-base';

class PostComponent extends Component {
  render(){
    return(
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../../assets/user.jpg')}/>
            <Body>
              <Text style={{ fontWeight: '900' }}>Ziyi</Text>
              <Text note>Jan 1, 2019</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
        </CardItem>
          <Body style={{ padding: 10 }}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </Body>
        <CardItem>
          <Left>
            <Button iconLeft transparent dark>
              <Icon name="ios-heart-outline" style={{ color: 'black', paddingRight: 5 }}/>
              <Text>2</Text>
            </Button>
            <Button iconLeft transparent dark>
              <Icon name="ios-chatbubbles-outline" style={{ color: 'black', paddingRight: 5 }}/>
              <Text>1</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    )
  }
}

export default PostComponent;
