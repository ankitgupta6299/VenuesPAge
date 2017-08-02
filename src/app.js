/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainStack from './Main/MainStack';
import SearchScreenList from './Main/SearchScreenList';

const AuthStack = StackNavigator({
     
      MainStack: {
        screen: MainStack
      },
      SearchScreenList: {
        screen: SearchScreenList
      }
  },
  {
    headerMode: 'none',
    initialRouteName: 'MainStack',
  }
)
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <AuthStack  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
});

