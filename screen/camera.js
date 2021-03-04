import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios'
import { UserContext } from '../App'
import { QRContext } from '.';

export default function App(props) {
  const {
    navigation: { navigate },
  } = props;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { userData } = useContext(UserContext)
  const { entranceData, setEntrance } = useContext(QRContext)
  const { User_Name } = userData


  async function camera(data) {

    try {
      data = await data - 100;
      const checkin = await axios.post('https://radiant-basin-59716.herokuapp.com/camera', {
        User_Name, data
      })
      const myCheckin = {
        ...checkin.data,
        time: {
          seconds: new Date(checkin.data.time).getTime() / 1000,
          nanoseconds: new Date(checkin.data.time).getTime() * Math.pow(10, 6)
        }
      }
      setEntrance([...entranceData, myCheckin])
      Alert.alert("ทำการสแกนเรียบร้อย")
      navigate('notification')

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
    await camera(data);

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