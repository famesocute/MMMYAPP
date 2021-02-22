import React, {useEffect, useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Button} from './Button';


const Routes = {
  home: 'home',
  notification: 'notification',
  camera: 'camera'
};


const NavigationBar = ({state, descriptors, navigation}) => {
  const [current, setCurrent] = useState(null);
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const routeName = state.routeNames[state.index];


  useEffect(() => {
    setCurrent(routeName);
  }, [routeName]);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.appBar}>
        <Button
          onPress={() => navigation.navigate(Routes.home)}
          text= "ข่าวสาร"
          px={0}
        />
        
        <Button
          onPress={() => navigation.navigate(Routes.camera)}
          text= "กล้อง"
          px={0}
        />
        <Button
          onPress={() => navigation.navigate(Routes.notification)}
          text="แจ้งเตือน" 
          px={0}
        />
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#a52a2a',
    alignItems: 'center',
    paddingHorizontal: '7%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
   
  },
});

export default NavigationBar;
