import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationBar from '../components/Tabbar';
import camera from './camera';
import notification from './notification';
import home from './home';


const Tab = createBottomTabNavigator();


const TabScreen = () => {
  return (
    <Tab.Navigator tabBar={(props) => <NavigationBar {...props} />}>
      <Tab.Screen name="home" component={home}/>
      <Tab.Screen name="camera" component={camera} />
      <Tab.Screen name="notification" component={notification} />
    </Tab.Navigator>
  
  );
};

export default TabScreen; 