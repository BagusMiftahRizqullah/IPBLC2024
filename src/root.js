import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import login from './screen/login';
import register from './screen/register';
import home from './screen/home';

const Stack = createStackNavigator();
export default function root() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        options={{headerShown: false}}
        name="login"
        component={login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="register"
        component={register}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="home"
        component={home}
      />
    </Stack.Navigator>
  );
}
