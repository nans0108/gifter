import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import { TabBarIcon } from '../components';
import HomeScreen from '../screens/HomeScreen';
import MyListsScreen from '../screens/MyListsScreen/MyListsScreen';
import AddListScreen from '../screens/AddListScreen';
import FriendsListScreen from '../screens/FriendsListScreen/FriendsListScreen';
import ChooseGiftScreen from '../screens/ChooseGiftScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MyListsStack = createStackNavigator(
  {
    MyLists: MyListsScreen,
  },
  config
);

MyListsStack.navigationOptions = {
  tabBarLabel: 'My Lists',
  tabBarOptions: { activeTintColor: Colors.gifterPink },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  ),
};

MyListsStack.path = '';

AddListStack = createStackNavigator(
  {
    AddList: AddListScreen,
  },
  config
);

AddListStack.navigationOptions = {
  tabBarLabel: 'Add List',
  tabBarOptions: { activeTintColor: Colors.gifterPink },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'} />
  ),
};

AddListStack.path = '';

const FriendsStack = createStackNavigator(
  {
    Friends: FriendsListScreen,
  },
  config
);

FriendsStack.navigationOptions = {
  tabBarLabel: 'Friends',
  tabBarOptions: { activeTintColor: Colors.gifterPink },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} />
  ),
};

FriendsStack.path = '';

const ChooseGiftStack = createStackNavigator(
  {
    ChooseGift: ChooseGiftScreen,
  },
  config
);

ChooseGiftStack.navigationOptions = {
  tabBarLabel: 'Choose Gift',
  tabBarOptions: { activeTintColor: Colors.gifterPink },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-gift' : 'md-gift'} />
  ),
};

ChooseGiftStack.path = '';

const tabNavigator = createBottomTabNavigator({
  FriendsStack,
  MyListsStack,
  AddListStack,

  ChooseGiftStack,
});

tabNavigator.path = '';

export default tabNavigator;
