import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Dbtest from './src/Tests/Dbtest';
import Create from './src/screens/Create';
import Welcome from './src/screens/Welcome';
import Join from './src/screens/Join';
import Menu from './src/screens/Menu';
import Price from './src/screens/Price';
import Dbtest from './src/Tests/Dbtest2';
import LinkTest from './src/Tests/LinkTest';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Price"
        screenOptions={{
          headerTintColor: 'black',
          headerStyle: {backgroundColor: '#fff'},
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: 'Ping'}}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{title: 'Create'}}
        />
        <Stack.Screen name="Join" component={Join} options={{title: 'Join'}} />
        <Stack.Screen name="Menu" component={Menu} options={{title: 'Menu'}} />
        <Stack.Screen
          name="Price"
          component={Price}
          options={{title: 'Price'}}
        />
        <Stack.Screen
          name="Dbtest"
          component={Dbtest}
          options={{title: 'test'}}
        />
        <Stack.Screen
          name="LinkTest"
          component={LinkTest}
          options={{title: 'test'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
