import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import CurrencyForm from '../components/CurrencyForm.js';
import ListItem from '../components/ListItem.js';

export default class CurrencyListContainer extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CurrencyForm
          style={{width: 400, height: 400}}
          setOptions={this.props.setOptions}
          onSubmit={this.props.addItem}/>
        <View>
          <ListItem
            style={{width: 400, height: 400}}
            onRemove={this.props.removeItem}
            items={this.props.currencies}
            rates={this.props.rates}
            number={this.props.number} />
        </View>
      </View>
    );
  }
}
CurrencyListContainer.PropTypes = {
  setOptions: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  baseCurrency: PropTypes.string.isRequired,
  currencies: PropTypes.array.isRequired,
  rates: PropTypes.object.isRequired
};
