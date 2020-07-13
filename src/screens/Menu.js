import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {View} from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from '../constants/styles';
import MenuFlatList1 from '../components/menus/MenuFlatList1';
import MenuFlatList2 from '../components/menus/MenuFlatList2';
import MenuFlatList3 from '../components/menus/MenuFlatList3';

const Tab = createMaterialTopTabNavigator();
export const MenuContext = React.createContext();

export default function Menu() {
  const menus = [
    {
      name: 'pizza',
      occupied: true,
    },
  ];
  return (
    <MenuContext.Provider value={{menus}}>
      <View style={styles.menuContainer}>
        <MenuNavigation />
        <View style={styles.footer}>
          <CustomButton buttonColor={'#023e71'} title={'다음'} />
        </View>
      </View>
    </MenuContext.Provider>
  );
}

function MenuNavigation() {
  const {menus} = React.useContext(MenuContext);
  console.log(menus);
  return (
    <MenuContext.Provider value={menus}>
      <Tab.Navigator>
        <Tab.Screen name="Menu1" component={MenuFlatList1} />
        <Tab.Screen name="Menu2" component={MenuFlatList2} />
        <Tab.Screen name="Menu3" component={MenuFlatList3} />
      </Tab.Navigator>
    </MenuContext.Provider>
  );
}
