import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import Item from '../components/Item.js';

export default class ListItem extends Component {
  render() {
    return this.props.items ?
      (<ScrollView style={{flex: 1, marginTop: 10}}>
        {this.props.items.map((item, index) => (
          <Item
            onRemove={this.props.onRemove}
            item={item}
            rates={this.props.rates}
            number={this.props.number}
            key={item} />
        ))}
      </ScrollView>)
    : null;
  }
}
ListItem.propTypes = {
  onRemove: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  rates: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired
};
