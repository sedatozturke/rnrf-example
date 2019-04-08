import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomePage extends Component {
  render() {
    return (
      <View>
          <Button onPress={Actions.productList} title="Products"/>
          <Button onPress={Actions.modalPage} title="Modal Page"/>
          <Button onPress={Actions.lightBoxPage} title="Lightbox Page"/>
          <Button onPress={Actions.tab1} title="Tabbed Pages"/>
      </View>
    );
  }
}
