import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Create from './src/screens/Create';
import Welcome from './src/screens/Welcome';
import Join from './src/screens/Join';
import Menu from './src/screens/Menu';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerTintColor: 'black',
          headerStyle: {backgroundColor: '#fff'},
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: '핑'}}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{title: '방 만들기'}}
        />
        <Stack.Screen
          name="Join"
          component={Join}
          options={{title: '방 참여'}}
        />
        <Stack.Screen name="Menu" component={Menu} options={{title: 'Menu'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
