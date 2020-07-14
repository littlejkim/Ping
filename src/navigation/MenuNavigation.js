import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MenuContext} from '../screens/Menu';

import MenuFlatList1 from '../components/menus/MenuFlatList1';
import MenuFlatList2 from '../components/menus/MenuFlatList2';
import MenuFlatList3 from '../components/menus/MenuFlatList3';
const Tab = createMaterialTopTabNavigator();

export default function MenuNavigation() {
  const {menuData} = React.useContext(MenuContext);
  return (
    <MenuContext.Provider value={{menuData}}>
      <Tab.Navigator>
        <Tab.Screen name="Menu1" component={MenuFlatList1} />
        <Tab.Screen name="Menu2" component={MenuFlatList2} />
        <Tab.Screen name="Menu3" component={MenuFlatList3} />
      </Tab.Navigator>
    </MenuContext.Provider>
  );
}
