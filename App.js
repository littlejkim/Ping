import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Dbtest from './src/Tests/Dbtest';
import Create from './src/screens/Create';
import Welcome from './src/screens/Welcome';
import Join from './src/screens/Join';
import Menu from './src/screens/Menu';
import Price from './src/screens/Price';
import Distance from './src/screens/Distance';
import Results from './src/screens/Results';

import Dbtest from './src/Tests/Dbtest2';
import LinkTest from './src/Tests/LinkTest';
import LinkCreate from './src/Tests/LinkCreate';
import TestFront from './src/Tests/TestFront';

import {StoreProvider} from './src/context/DataContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerTintColor: 'black',
            headerStyle: {backgroundColor: '#fff'},
            headerBackTitleVisible: false,
          }}>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{title: '투표해'}}
          />
          <Stack.Screen
            name="Create"
            component={Create}
            options={{title: 'Create'}}
          />
          <Stack.Screen
            name="Join"
            component={Join}
            options={{title: '가입'}}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{title: '메뉴 선택'}}
          />
          <Stack.Screen
            name="Price"
            component={Price}
            options={{title: '가격 선택'}}
          />
          <Stack.Screen
            name="Distance"
            component={Distance}
            options={{title: '거리 선택'}}
          />
          <Stack.Screen
            name="Results"
            component={Results}
            options={{title: '결과'}}
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
          <Stack.Screen
            name="LinkCreate"
            component={LinkCreate}
            options={{title: 'test'}}
          />
          <Stack.Screen
            name="TestFront"
            component={TestFront}
            options={{title: 'test'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}
