import axios from 'axios';
import React, { useEffect, useState ,useContext } from 'react';
import { ScrollView, View, Image, StyleSheet, Alert, Text, Linking, Button } from 'react-native';
import { DismissKeyboard } from '../components/DismissKeyboard';
import { Nloging } from './index';
import {UserContext} from '../App'

export default ({navigation}) => {
  const {userData,setUserData} = useContext(UserContext)
  
  const Separator = () => (
    <View style={styles.separator} />
  );


  return (
    <DismissKeyboard>

      <ScrollView style={{ backgroundColor: '#ffdead' }}>

        <View style={{ backgroundColor: '#a52a2a', paddingTop: 50, paddingBottom: 30 }}>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ paddingLeft: 20 }}>
              <Image style={styles.Im}
                source={require('../assets/fame.jpg')} />
            </View>
            <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                {userData ? (
                  <>
                    <Text style={styles.Name}> {userData.Name} </Text>
                  </>
                ) : null}
                {userData ? (
                  <>
                    <Text style={styles.Name}> {userData.LastName} </Text>
                  </>
                ) : null}
              </View>
              <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
                <View style={{ backgroundColor: '#808080', paddingTop: 2, paddingBottom: 2, }}>
                  <Button
                    title="ออกจากระบบ"
                    text="ออกจารระบบ"
                    color="#ffffff"
                    fontSize={5}
                    rounded
                    onPress={() => {
                      setUserData(null)
                      navigation.dangerouslyGetParent().navigate('Login') 
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

        </View>

        <View style={styles.NewsView}>
          <View style={styles.NewsView2}>
            <Text style={{ color: '#fdf5e6' }}>
              ข่าวสาร
                </Text>
          </View>
        </View>

        <View style={{ paddingLeft: 40 }}>
          <Image style={styles.ImNews}
            source={{
              uri: 'https://www.thairath.co.th/media/dFQROr7oWzulq5FZUEreNdSCTMbl63gelmZzYCzj77rGVQqHXzORntCeI0awA39i9a5.webp',
            }} />
          <Text
            onPress={() => {
              Linking.openURL('https://www.thairath.co.th/news/local/bangkok/1802814');
            }}>
            คลิ๊กที่นี่!!
            </Text>

        </View>

        <Separator />

        <View style={{ paddingLeft: 40 }}>
          <Image style={styles.ImNews}
            source={{
              uri: 'https://www.thairath.co.th/media/dFQROr7oWzulq5Fa4VROlNtVVsXYe2WCZU6IeSXVDuNAyg7SyE4XCiQleL1VRuosFul.webp'
            }} />
          <Text
            onPress={() => {
              Linking.openURL('https://www.thairath.co.th/news/politic/2014745');
            }}>
            คลิ๊กที่นี่!!
            </Text>

        </View>
      </ScrollView>


    </DismissKeyboard>
  );
};
const styles = StyleSheet.create({
  Im: {
    borderRadius: 150,
    width: 130,
    height: 130,
  },
  ImNews: {
    width: 320,
    height: 180,
  },
  Name: {
    fontSize: 20,
    color: '#ffdead'
  },
  NewsView2: {
    backgroundColor: '#000080',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  NewsView: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 320,
    paddingBottom: 20,
  },
  separator: {
    marginVertical: 20,
  },
});