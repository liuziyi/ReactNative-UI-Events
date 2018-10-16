import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import WelcomeScreen from './screens/Auth/WelcomeScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import HomeScreen from './screens/App/HomeScreen';
import ExploreScreen from './screens/App/ExploreScreen';
import FollowingScreen from './screens/App/FollowingScreen';
import NotificationScreen from './screens/App/NotificationScreen';
import ProfileScreen from './screens/App/ProfileScreen';

import SocialScreen from './screens/App/SocialScreen';
import ResultScreen from './screens/App/ResultScreen';
import ScheduleScreen from './screens/App/ScheduleScreen';
import AboutScreen from './screens/App/AboutScreen';

import NotificationIconComponent from './components/NotificationIconComponent';

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Register: RegisterScreen,
  Login: LoginScreen
});

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home-outline" color={tintColor} size={24}/>
      )
    }
  },
  Explore: {
    screen: ExploreScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search-outline" color={tintColor} size={24}/>
      )
    }
  },
  Following: {
    screen: FollowingScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-star-outline" color={tintColor} size={24}/>
      )
    }
  },
  Notifications: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon name="ios-notifications-outline" color={tintColor} size={24}/>
          <NotificationIconComponent/>
        </View>
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person-outline" color={tintColor} size={24}/>
      )
    }
  }
},{
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'grey'
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Homepage: AppTabNavigator,
  Social: { screen: SocialScreen },
  Result: { screen: ResultScreen },
  Schedule: { screen: ScheduleScreen },
  About: { screen: AboutScreen }
});

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
});
