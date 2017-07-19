import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, Button } from 'react-native';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realRate: '1.00'
    };
    this.changeRealRate = this.changeRealRate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  changeRealRate(value) {
    if (value !== '') {
      this.setState({
        realRate: value
      });
    }
  }
  handleRemove(currency) {
    console.log(currency);
    this.props.onRemove(currency);
  }
  render() {
    const valueInCurrency = Math.round(this.props.rates[this.props.item] * this.props.number * 100) / 100;
    const gainLoss = Math.round(((this.state.realRate * this.props.number) - valueInCurrency) * 100) / 100;
    return (
      <View style={{marginBottom: 5, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1}}>
          <Button onPress={this.handleRemove.bind(null, this.props.item)} title="X" />
        </View>
        <View style={{flex: 3}}>
          <Text>
          {valueInCurrency} {this.props.item}
          { " " }
          ---
          { " " } Rate Given: { " " }
          </Text>
        </View>
        <View style={{flex: 2}}>
          <TextInput
            style={{textAlign: 'center', height: 50, width: 50}}
            keyboardType="numeric"
            value={this.state.realRate}
            onChangeText={this.changeRealRate}
            maxLength={10} />
        </View>
        <View style={{flex: 3}}>
          { this.state.realRate !== '' && <Text> Gain/Loss: {gainLoss} {this.props.item}</Text> }
        </View>
      </View>
    )
  }
}
Item.propTypes = {
  onRemove: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  rates: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired
};
