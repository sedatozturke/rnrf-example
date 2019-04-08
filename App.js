import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import {Stack, Router, Scene, Modal, Lightbox, Drawer, Tabs} from 'react-native-router-flux';
import Homepage from './Homepage';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import ModalPage from './ModalPage';
import LightBoxPage from './LightBoxPage';
import MenuIcon from './menu_burger.png';
import DrawerContent from './DrawerContent';
import TabIcon from './TabIcon';
import TabOne from './TabOne';
import TabTwo from './TabTwo';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Modal key="modal" hideNavBar>
          <Lightbox key="lightbox">
            <Drawer
              hideNavBar
              key="drawer"
              onExit={() => {
                console.log('Drawer closed');
              }}
              onEnter={() => {
                console.log('Drawer opened');
              }}
              contentComponent={DrawerContent}
              drawerImage={MenuIcon}
              drawerWidth={200}
            >
              <Stack key="root">
                <Scene key="homepage" component={Homepage} title="Home" initial />
                <Scene key="productList" hideDrawerButton back component={ProductList} title="Products" />
                <Scene key="productDetails" hideDrawerButton back component={ProductDetails} title="Product Details"/>
              </Stack>
              <Scene hideNavBar>
                <Tabs
                  key="tabbar"
                  backToInitial
                  onTabOnPress={() => {
                    console.log('Tab Pressed');
                  }}
                  showLabel={false}
                  tabBarStyle={styles.tabBarStyle}
                  activeBackgroundColor="white"
                  inactiveBackgroundColor="rgba(0, 0, 255, 0.6)"
                >
                <Stack
                  key="tab_1"
                  title="Tab #1"
                  tabBarLabel="TAB #1"
                  inactiveBackgroundColor="#FFF"
                  activeBackgroundColor="#DDD"
                  icon={TabIcon}
                  navigationBarStyle={{ backgroundColor: 'white' }}
                  titleStyle={{ color: 'black', alignSelf: 'center' }}
                >
                  <Scene key="tab1" component={TabOne} title="TAB1" />
                </Stack>
                <Stack
                  key="tab_2"
                  title="Tab #2"
                  tabBarLabel="TAB #2"
                  inactiveBackgroundColor="#FFF"
                  activeBackgroundColor="#DDD"
                  icon={TabIcon}
                  navigationBarStyle={{ backgroundColor: 'white' }}
                  titleStyle={{ color: 'black', alignSelf: 'center' }}
                >
                  <Scene key="tab2" component={TabTwo} title="TAB2" />
                </Stack>
                </Tabs>
              </Scene>
            </Drawer>
            <Scene key="lightBoxPage" component={LightBoxPage}/>
          </Lightbox>
          <Scene key="modalPage" component={ModalPage}/>
        </Modal> 
      </Router>
    );
  }
}
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

