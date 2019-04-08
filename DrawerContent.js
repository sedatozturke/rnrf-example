import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class DrawerContent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string,
  };

  static contextTypes = {
    drawer: PropTypes.object,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Drawer Menu</Text>
        <Button onPress={Actions.homepage} title="Homepage"/>
        <Button onPress={Actions.productList} title="Products"/>
        <Button onPress={Actions.modalPage} title="Modal Page"/>
        <Button onPress={Actions.lightBoxPage} title="Lightbox Page"/>
        <Button onPress={Actions.pop} title="Close Drawer" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
  });

export default DrawerContent;