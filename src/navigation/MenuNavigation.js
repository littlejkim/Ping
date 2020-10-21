import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MenuContext} from '../screens/Menu';

import MenuFlatList1 from '../components/menus/MenuFlatList1';
import MenuFlatList2 from '../components/menus/MenuFlatList2';
import MenuFlatList3 from '../components/menus/MenuFlatList3';
const Tab = createMaterialTopTabNavigator();

export default function MenuNavigation() {
  const {menuData, pickSelected} = React.useContext(MenuContext);
  return (
    <MenuContext.Provider value={{menuData, pickSelected}}>
      <Tab.Navigator>
        <Tab.Screen name="중식" component={MenuFlatList1} />
        <Tab.Screen name="일식" component={MenuFlatList2} />
        <Tab.Screen name="양식" component={MenuFlatList3} />
      </Tab.Navigator>
    </MenuContext.Provider>
  );
}
