import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Header, Body, Left, Right, Content, Text, Button, Icon, Thumbnail } from 'native-base'

class AboutScreen extends Component {

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
            <Text>About</Text>
          </Body>
          <Right></Right>
        </Header>
        <Content style={{ padding: 20 }}>
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontWeight: "900" }}>Event Title</Text>
            <Text style={{ color: 'grey', marginBottom: 20 }}>Event Organiser</Text>
            <Text>Date & Time</Text>
            <Text>Location</Text>
            <Text>Price</Text>
            <Text>Category</Text>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontWeight: "900" }}>Description</Text>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock
            </Text>
          </View>
          <View style={{ paddingVertical: 20, height: 200 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "900" }}>Followers</Text>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2 }}
                  source={require('../../assets/users/user1.jpg')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2 }}
                  source={require('../../assets/users/user2.jpg')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2 }}
                  source={require('../../assets/users/user3.jpg')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2 }}
                  source={require('../../assets/users/user4.jpg')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2 }}
                  source={require('../../assets/users/user5.jpg')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2 }}
                  source={require('../../assets/users/user6.jpg')}
                />
              </ScrollView>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

export default AboutScreen;
