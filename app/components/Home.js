import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Button, View, ScrollView } from 'react-native';
import RateContainer from '../containers/RateContainer.js';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Real Rates'
  };
  render() {
    return (
      <ScrollView style={{margin: 20}}>
        <Text>Compare the actual trade value to the one given by the money exchange and see how much you'll be gaining or (most likely) losing.</Text>
        <View>
          <RateContainer />
        </View>
      </ScrollView>
    )
  }
}
