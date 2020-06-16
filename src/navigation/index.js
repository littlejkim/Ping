import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as React from 'react';

import Welcome from '../screens/Welcome';
// import Home from '../screens/Home';
// import Login from '../screens/Login';
// import Signup from '../screens/Signup';

const screens = createStackNavigator(
  {
    Welcome,
    // Home,
    // Login,
    // Signup,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: () => <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRIghtContainerStyle: {},
    },
  },
);

export default createAppContainer(screens);
