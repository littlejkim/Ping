import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Create from './src/screens/Create';
import Welcome from './src/screens/Welcome';
import Join from './src/screens/Join';
import {Button} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Join" component={Join} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
