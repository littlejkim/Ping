import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers/index';

import dbtest from './src/screens/dbtest';
import Create from './src/screens/Create';
import Welcome from './src/screens/Welcome';
import Join from './src/screens/Join';
import Menu from './src/screens/Menu';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
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
            options={{title: 'Ping'}}
          />
          <Stack.Screen
            name="Create"
            component={Create}
            options={{title: 'Create'}}
          />
          <Stack.Screen
            name="Join"
            component={Join}
            options={{title: 'Join'}}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{title: 'Menu'}}
          />
          <Stack.Screen
            name="dbtest"
            component={dbtest}
            options={{title: 'test'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent('App', () => App);
