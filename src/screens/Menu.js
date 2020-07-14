import React from 'react';

import {View} from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from '../constants/styles';

import {menuData} from '../constants/data';
import MenuNavigation from '../navigation/MenuNavigation';

export const MenuContext = React.createContext();

export default function Menu() {
  return (
    <MenuContext.Provider value={{menuData}}>
      <View style={styles.menuContainer}>
        <MenuNavigation />
        <View style={styles.footer}>
          <CustomButton buttonColor={'#023e71'} title={'다음'} />
        </View>
      </View>
    </MenuContext.Provider>
  );
}
