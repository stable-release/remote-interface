import * as React from 'react';

import {Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './layouts/home/home';
import Store from './layouts/store/store';
import FingerprintAuthFlow from './layouts/fingerprintAuthFlow/fingerprintAuthFlow';
import Accounts from './layouts/accounts/Accounts';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home Page', headerShown: false}}
        />
        <Stack.Screen
          name="Store"
          component={Store}
          options={{title: 'Store Page', headerShown: false}}
        />
        <Stack.Screen
          name="FingerprintAuthFlow"
          component={FingerprintAuthFlow}
          options={{title: 'Fingerprint Auth Flow Example', headerShown: false}}
        />
        <Stack.Screen
          name="Accounts"
          component={Accounts}
          options={{title: 'Accounts', headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
