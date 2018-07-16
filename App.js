/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Store from './src/Store';
import { Provider } from 'react-redux';

import { Header, CryptoContainer } from './src/components'

export default class App extends Component {
  render() {
    console.log('EXECUTING MY APP');
    return (
      <Provider store={Store}>
        <View>
          <Header headerText='Cryptocurrency App' />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
