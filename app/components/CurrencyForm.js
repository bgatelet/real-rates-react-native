import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button, Picker, View } from 'react-native';
import CountryData from 'country-data';

export default class CurrencyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.text !== '') {
      this.props.onSubmit(this.state.text);
    }
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Picker
          style={{width: 300, height: 200}}
          onValueChange={(value) => this.setState({text: value})}
          selectedValue={(this.state && this.state.text) || ''}>
          <Picker.Item value="" label="---" />
          {this.props.setOptions()}
        </Picker>
        <Button
          style={{width: 50, height: 50}}
          onPress={this.handleClick}
          title="ADD" />
      </View>
    );
  }
}
CurrencyForm.PropTypes = {
  setOptions: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
