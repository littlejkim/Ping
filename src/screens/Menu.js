import React from 'react';
import {View} from 'react-native';
import CustomButton from '../components/CustomFooterButton';
import styles from '../constants/styles';
import MenuNavigation from '../navigation/MenuNavigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.menuContainer}>
        <MenuNavigation />
        <View style={styles.footer}>
          <CustomButton buttonColor={'#023e71'} title={'이전'} />
          <CustomButton buttonColor={'gray'} title={'다음'} />
        </View>
      </View>
    );
  }
}
