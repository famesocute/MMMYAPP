import React, { useContext ,useState} from 'react';
import {ScrollView, View, Image, StyleSheet, Alert, Text, TextInput, KeyboardAvoidingView, Button} from 'react-native';
import {DismissKeyboard} from '../components/DismissKeyboard';
import axios from 'axios'

import {UserContext} from '../App'

export default (props) => {
  const {
    navigation: {navigate},
  } = props;
  const [value, onChangeText] = useState('Useless Placeholder');
  const { setUserData} = useContext(UserContext)
  const Separator = () => (
    <View style={styles.separator} />); 
  const [loginData, setloginData] = useState({
    User_Name: "",
    Password: "",  })
  
  async function loginn () {
    const {User_Name,Password}= loginData

    if (User_Name !== "" && Password !== "" ){  
      
      try{
        const response = await axios.post('https://radiant-basin-59716.herokuapp.com/login',loginData)
        setUserData(response.data)
        navigate('Tab',{screen: "home" })
       
      } catch (error) {
        Alert.alert ("ผู้ใช้หรือรหัสผิด กรุณาตรวจสอบ")
      }
    }
    
  }
  
  return (
      <DismissKeyboard>
      <KeyboardAvoidingView behavior="height">
      <ScrollView style={{backgroundColor: '#ffdead', paddingBottom: 200}}>

      <View style={styles.View}> 

      <Text style={{fontSize: 100}}>
        MY
      </Text>
      <Text>
        @ Electricity Engineering CMU
      </Text>

     </View>

      <View style={styles.View2}>

        <View style={{flexDirection: 'row'}}>

          <View style={{paddingRight: 20, justifyContent: 'center'}}> 
          <Text style={styles.baseText}>
           ชื่อผู้ใช้
           </Text> 
          </View>

          <View style={{paddingBottom:10,paddingTop:10, paddingLeft: 8}}>
          <TextInput style={styles.TextInput1}
          onChangeText={(Text) => {
            setloginData({ ...loginData, User_Name: (Text) })
          }}
          value={loginData.User_Name} />
           </View>

        </View>

        <View style={{flexDirection: 'row'}}>

          <View style={{paddingRight: 20, justifyContent: 'center'}}> 
          <Text style={styles.baseText}>
           รหัสผ่าน
          </Text> 
        </View>
      

          <View style={{paddingTop: 10, paddingBottom:0}}>
          <TextInput style={styles.TextInput1}
          onChangeText={(Text) => {
            setloginData({ ...loginData, Password: (Text) })
          }}
          value={loginData.Password} />
          </View>
        </View>
      </View>
        
      <View style={{paddingLeft: 150, paddingRight: 150}}>  
      <View style={{backgroundColor: '#ffffe0'}}>
      <Button 
        title="เข้าสู่ระบบ"
        text="เข้าสู่ระบบ"
        color="#a52a2a"
        rounded
        onPress={loginn}
        />
      </View>
      </View>

       <View style={{paddingTop: 50, paddingBottom: 50}}>
      <Separator />
      </View> 

      <View style={{paddingLeft: 110, paddingRight: 110}}>
       <View style={{backgroundColor: '#a52a2a', paddingTop: 10, paddingBottom: 10}}>
        <Button 
        title="สมัคร"
        text="สมัคร"
        color="#ffffff"
        rounded
        onPress={() => navigate('signup')}
        />
        </View>
        </View>
        
        </ScrollView>
        </KeyboardAvoidingView>   
  </DismissKeyboard>
    );   
};
const styles = StyleSheet.create({
    View:{
      alignItems: 'center',
      paddingTop: 80,
      paddingBottom: 50
    },
    View2:{ 
      paddingBottom: 50,
      alignItems: 'center'
    },
    view3:{
      backgroundColor:'#ffdead',
      justifyContent: 'center',
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    baseText: {
      fontWeight: 'bold',
    },
    innerText: {
      color: 'red'
    },
    TextInput1:{
      height: 50, 
      borderColor: '#ffdab9', 
      borderWidth: 1, 
      borderRadius: 100,
      backgroundColor: '#ffffff',
      width: 250,
      color: '#000000',
      paddingLeft:10
    },
    ButtonView:{
      paddingTop:40,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });