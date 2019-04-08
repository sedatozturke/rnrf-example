import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const products = [
  {
    name: 'Product 1',
    description: 'Product 1 Description'
  },
  {
    name: 'Product 2',
    description: 'Product 2 Description'},
  {
    name: 'Product 3',
    description: 'Product 3 Description'}
]

export default class ProductList extends Component {
  goDetail(product) {
    Actions.productDetails({ product });
  }
  render() {
    return (
      <View>
          {
            products.map((product) => {
              return (
                <Button key={'products' + product.name} onPress={() => this.goDetail(product)} title={product.name}/>
              );
            })
          }
      </View>
    );
  }
}

