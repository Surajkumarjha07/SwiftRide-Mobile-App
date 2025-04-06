import { StyleSheet } from 'react-native'
import React from 'react'
import LogIn from './src/screens/logIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './src/screens/signUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LogIn'>
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Create Account', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}