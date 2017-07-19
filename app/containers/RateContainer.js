import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Picker } from 'react-native';
import CountryData from 'country-data';
import RateForm from '../components/RateForm.js';
import CurrencyListContainer from '../containers/CurrencyListContainer.js';

export default class RateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userListID: '',
      availableCurrencies: ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"],
      baseCurrency: 'USD',
      number: '1.00',
      currencies: [],
      rates: {}
    };
    this.onChangeBaseCurrency = this.onChangeBaseCurrency.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onSetOptions = this.onSetOptions.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.loadRates = this.loadRates.bind(this);
  }
  componentWillMount() {
    this.loadRates();
  }

  /**
   * Change the base currency.
   *
   * @param {object} event - the JavaScript event object
   */
  onChangeBaseCurrency(value) {
    this.setState({
      baseCurrency: value
    }, () => {
      this.loadRates();
    });
  }
  /**
   * Change the amount of money to convert.
   *
   * @param {object} event - the JavaScript event object
   */
  onChangeNumber(value) {
    this.setState({
      number: value
    });
  }
  /**
   * Map each currency as an option for a select dropdown.
   *
   * @returns {array}
   */
  onSetOptions() {
    const formOptions = this.state.availableCurrencies.map((currency) => {
      return <Picker.Item value={currency} key={currency} label={currency + " - " + CountryData.lookup.currencies({code: currency})[0].name} />;
    });
    return formOptions;
  }
  /**
   * Add a currency to the list.
   *
   * @param {string} currency
   */
  onAddItem(currency) {
    if (!this.state.currencies.includes(currency)) {
      this.setState({
        currencies: [].concat(this.state.currencies).concat([currency])
      });
    }
  }
  /**
   * Remove currency from the list.
   *
   * @param {string} currency
   */
  onRemoveItem(currency) {
    this.setState(previousState => ({ currencies: previousState.currencies.filter(currencyFromArray => currencyFromArray !== currency) }));
  }

  /**
   * Load the rates for all the currencies against the base currency.
   *
   */
  loadRates() {
    const url = `https://api.fixer.io/latest?base=${this.state.baseCurrency}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
        this.setState({
          rates: xhr.response.rates
        });
      } else {
        // failure
        console.log(xhr.response);
      }
    });
    xhr.send();
  }

  render() {
    return (
      <View style={{margin: 10}}>
        <RateForm
          style={{flex: 1}}
          setOptions={this.onSetOptions}
          changeBaseCurrency={this.onChangeBaseCurrency}
          changeNumber={this.onChangeNumber}
          availableCurrencies={this.state.availableCurrencies}
          baseCurrency={this.state.baseCurrency}
          number={this.state.number} />
        <Text style={{marginTop: 10, textAlign: 'center'}}>-----------</Text>
        <CurrencyListContainer
          style={{flex: 1}}
          setOptions={this.onSetOptions}
          addItem={this.onAddItem}
          removeItem={this.onRemoveItem}
          availableCurrencies={this.state.availableCurrencies}
          baseCurrency={this.state.baseCurrency}
          number={this.state.number}
          currencies={this.state.currencies}
          rates={this.state.rates} />
      </View>
    );
  }
}
