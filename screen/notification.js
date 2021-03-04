import * as React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, Button, Alert } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App'
import { QRContext } from '.';

function getFullDate(time) {
  let day = new Date(time).getDate();
  let month = new Date(time).getMonth() + 1;
  let year = new Date(time).getFullYear();

  return `${day}-${month < 10 ? '0' + month.toString() : month}-${year}`;
}

function getTime(time) {
  let hr = (new Date(time).getHours() + 24) % 24;
  let mins = new Date(time).getMinutes();
  let displayMin = mins.toString();
  if (mins < 10) {
    displayMin = '0' + mins.toString();
  }

  if (hr === 0) {
    hr = 24;
  } else if (hr > 24) {
    hr %= 24;
  }
  return hr + ':' + displayMin + ' ';
}

export default (props) => {
  const Separator = () => (
    <View style={styles.separator} />
  );
  const { userData } = useContext(UserContext)
  const { User_Name } = userData
  const { entranceData, setEntrance } = useContext(QRContext)


  async function out() {

    try {
      const checkout = await axios.post('https://radiant-basin-59716.herokuapp.com/timeout', {
        User_Name
      })
      const myCheckout = {
        ...checkout.data,
        time: {
          seconds: new Date(checkout.data.time).getTime() / 1000,
          nanoseconds: new Date(checkout.data.time).getTime() * Math.pow(10, 6)
        }
      }
      setEntrance([...entranceData, myCheckout])
      Alert.alert("เรียบร้อย ")

    } catch (error) {
      Alert.alert(" ไม่เรียบร้อย ")
    }
  }



  useEffect(() => {
    async function get() {
      try {
        const checkin = await axios.get('https://radiant-basin-59716.herokuapp.com/getdata', { params: { User_Name } })
        const checkout = await axios.get('https://radiant-basin-59716.herokuapp.com/gettimeout', { params: { User_Name } })

        setEntrance([...checkin.data, ...checkout.data])
      } catch (error) {
        alert(error.message)
      }
    }
    get()
  }, [])


  return (
    <ScrollView>
      <View style={{ paddingTop: 70, paddingBottom: 70, alignItems: 'center', backgroundColor: '#a52a2a' }}>
        <View style={{ backgroundColor: '#000000', paddingBottom: 5, paddingTop: 5, paddingLeft: 5, paddingRight: 5 }}>
          <Button
            title="ออกจากสถานที่"
            text="ออกจากสถานที่"
            color="#fdf5e6"
            rounded
            onPress={() => out()}
          />
        </View>
      </View>
      <View>
        {entranceData.slice(0).sort((a, b) => {
          return b.time.seconds - a.time.seconds
        }).map((item,i) => {
          return (
            <View key={i.toString()}>
              <Card>
                <Card.Actions>
                  <Card.Cover style={{ width: 100, height: 100, borderRadius: 100 }}
                    source={require('../assets/3.png')} />
                  <Text style={{ paddingLeft: 5, fontSize: 18 }}>{item.gate}</Text>
                </Card.Actions>

                <Card.Actions>
                  <Text style={{paddingLeft: 30}}> {getFullDate(item.time.seconds * 1000 )}</Text> 
                  <Text style={{ paddingLeft: 30 }}> {getTime(item.time.seconds * 1000)} น. </Text>
                  {item.data ? (<Text style={{ paddingLeft: 60 }}> {item.data} องศา </Text>) : null}
                </Card.Actions>
              </Card>
              <Separator />
            </View>
          )
        })}


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
  },
});