import React, { Component } from 'react';
import { Container, Header, Body, Left, Right, Content, Text, Button, Icon } from 'native-base'

class SocialScreen extends Component {

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
            <Text>Social</Text>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <Text>Social</Text>
        </Content>
      </Container>
    )
  }
}

export default SocialScreen;
