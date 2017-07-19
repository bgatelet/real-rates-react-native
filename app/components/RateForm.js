import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, Picker, View } from 'react-native';

export default class RateForm extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Amount to change:</Text>
        <TextInput
          style={{marginTop: 10, textAlign: 'center', width: 300, height: 20}}
          keyboardType="numeric"
          value={this.props.number}
          onChangeText={this.props.changeNumber}
          maxLength={10} />
        <Picker
          style={{width: 300, height: 200}}
          onValueChange={this.props.changeBaseCurrency}
          selectedValue={(this.props && this.props.baseCurrency) || ''}>
          {this.props.setOptions()}
        </Picker>
      </View>
    );
  }
}
RateForm.PropTypes = {
  setOptions: PropTypes.func.isRequired,
  changeBaseCurrency: PropTypes.func.isRequired,
  changeNumber: PropTypes.func.isRequired,
  baseCurrency: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};
