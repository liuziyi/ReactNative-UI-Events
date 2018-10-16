import React, { Component } from 'react';
import { Container, Header, Body, Left, Right, Content, Text, Button, Icon, Card, CardItem } from 'native-base'

class ResultScreen extends Component {

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
            <Text>Result</Text>
          </Body>
          <Right></Right>
        </Header>
        <Content style={{ margin: 20 }}>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Result Title 1</Text>
                  <Text note>August 13, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={{ paddingLeft: 10 }}>
                <Text>Winner 1</Text>
                <Text>Winner 2</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Result Title 2</Text>
                  <Text note>August 13, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={{ paddingLeft: 10 }}>
                <Text>Winner 1</Text>
                <Text>Winner 2</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default ResultScreen;
