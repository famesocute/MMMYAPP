import * as React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default (props) => {
  const Separator = () => (
    <View style={styles.separator} />
  );
  useEffect(() => {
    async function gogo() {
      const send = await axios.get('https://radiant-basin-59716.herokuapp.com/getuser?User_Name=Alitx2le')
      setUserData(send.data)
      
    }
    gogo()
    
  }, [])
 
  return (
    <ScrollView>
    <View>
      <Image  style={{height: 200}}
        source={require('../assets/red.jpg')} />
    </View>

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
   </ScrollView>
    );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
  },
});