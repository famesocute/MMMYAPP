import * as React from 'react';
import { View, Image, StyleSheet, Text, ScrollView , Button} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import {UserContext} from '../App'


export default (props) => {
  const Separator = () => (
    <View style={styles.separator} />
  );
  const {userData,setUserData} = useContext(UserContext)
  const  User_Name = userData.User_Name
  const axios = require('axios');
  const [Data, setData] = useState(null);

  async function out() {
   
    try {
      await axios.post('https://radiant-basin-59716.herokuapp.com/logout', {
        User_Name
      })
      Alert.alert(" เรียบร้อย ")

    } catch (error) {
      Alert.alert(" ไม่เรียบร้อย ")
    }
  }   
  
  async function get(){
    const GetData = await axios.get('https://radiant-basin-59716.herokuapp.com/getlogout?User_Name=j')
    setData = GetData.data
  }
 
 
  return (
    <ScrollView>
    <View style={{paddingTop: 70,paddingBottom:70 ,alignItems: 'center', backgroundColor: '#a52a2a'}}>
    <View style={{backgroundColor: '#000000', paddingBottom: 5, paddingTop: 5 ,paddingLeft: 5, paddingRight: 5}}>
    <Button 
        title="ออกจากสถานที่"
        text="ออกจากสถานที่"
        color="#fdf5e6"
        rounded
        onPress={out}
        />
    </View>
    </View>
    <Text>
      {Data}
    </Text>
    <View>
    <Card> 
  <Card.Actions>
      <Card.Cover style={{width: 100, height: 100, borderRadius: 100 }} 
      source={require('../assets/3.png')}/>
      <Text style={{paddingLeft: 20 , fontSize: 18}}> {Data.gate} </Text>
    </Card.Actions>
    
    <Card.Actions>
      <Text style={{paddingLeft: 60 }}> 09 : 30 น. </Text>
      <Text style={{paddingLeft: 120 }}> 36.8 องศา </Text>
    </Card.Actions>
    
  </Card>

  <Separator />

  <Card> 
  <Card.Actions>
      <Card.Cover style={{width: 100, height: 100, borderRadius: 100 }} 
      source={require('../assets/3.png')}/>
      <Text style={{paddingLeft: 20 , fontSize: 18}}> คณะวิศวกรรมภาคไฟฟ้า </Text>
    </Card.Actions>
    
    <Card.Actions>
      <Text style={{paddingLeft: 60 }}> 09 : 30 น. </Text>
      <Text style={{paddingLeft: 120 }}> 36.8 องศา </Text>
    </Card.Actions>
    
  </Card>

  
  <Separator />

  <Card> 
  <Card.Actions>
      <Card.Cover style={{width: 100, height: 100, borderRadius: 100 }} 
      source={require('../assets/3.png')}/>
      <Text style={{paddingLeft: 20 , fontSize: 18}}> คณะวิศวกรรมภาคไฟฟ้า </Text>
    </Card.Actions>
    
    <Card.Actions>
      <Text style={{paddingLeft: 60 }}> 09 : 30 น. </Text>
      <Text style={{paddingLeft: 120 }}> 36.8 องศา </Text>
    </Card.Actions>
    
  </Card>
  
  <Separator />

  <Card> 
  <Card.Actions>
      <Card.Cover style={{width: 100, height: 100, borderRadius: 100 }} 
      source={require('../assets/3.png')}/>
      <Text style={{paddingLeft: 20 , fontSize: 18}}> คณะวิศวกรรมภาคไฟฟ้า </Text>
    </Card.Actions>
    
    <Card.Actions>
      <Text style={{paddingLeft: 60 }}> 09 : 30 น. </Text>
      <Text style={{paddingLeft: 120 }}> 36.8 องศา </Text>
    </Card.Actions>
    
  </Card>
  </View>
   </ScrollView>
    );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
  },
});