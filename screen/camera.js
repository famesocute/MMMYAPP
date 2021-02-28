import React, { useState, useEffect ,useContext} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios'
import {UserContext} from '../App'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const {userData,setUserData} = useContext(UserContext)
  const  User_Name = userData.User_Name
  
  async function camera(data) {
    
    try {
      await axios.post('https://radiant-basin-59716.herokuapp.com/camera', {
        data,User_Name
      })
      Alert.alert(" เรียบร้อย ")

    } catch (error) {
      Alert.alert(" ไม่เรียบร้อย ")
    }
  }


  useEffect(() => {
    (async () => {
      try {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      } catch (error) {
        Alert.alert(" เชื่อมต่อกับกล้องไม่ได้ ")
      }
    })();

  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    camera(data);
    alert(`สแกนคิวอาร์โค้ดสำเร็จแล้ว `);
    

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});