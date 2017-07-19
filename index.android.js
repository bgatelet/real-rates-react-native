import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './app/config/routes';

export default class RealRatesRN extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

AppRegistry.registerComponent('RealRatesRN', () => RealRatesRN);
