import React, { useEffect, createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/login.js';
import signup from './screen/signup';
import TabScreen from './screen/index';



const Stack = createStackNavigator();

export const UserContext = createContext({})

export default () => {
  const [userData, setUserData] = useState(null)
  
  return (
    <NavigationContainer>
      <UserContext.Provider value={
        {
          userData,
          setUserData,
        }
      }>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tab"
            component={TabScreen}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
};