import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './res/components/Home'
import DetailScreen from './res/components/DetailScreen'

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['peoplesapp://'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Home: {
        path: 'home'
      },
      DetailScreen: {
        path: 'DetailScreen/:personId'
      }
    }
  }
};
const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;