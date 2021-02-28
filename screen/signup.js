import React from 'react';
import { useState } from 'react';
import { ScrollView, View, Image, StyleSheet, Alert, Text, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { DismissKeyboard } from '../components/DismissKeyboard';
import axios from 'axios'



export default (props) => {
  const {
    navigation: { navigate },
  } = props;
  const Separator = () => (
    <View style={styles.separator} />);
  const [DayData, setDayData] = useState('');
  const [MoData, setMoData] = useState('');
  const [YData, setYData] = useState('');

  const [registerData, setRegisterData] = useState({
    Name: "",
    LastName: "",
    Gender: "",
    Nationality: "",
    Birthday: "",
    ID_Card_No: '',
    E_mail: "",
    Address: "",
    User_Name: "",
    Password: "",

  })

  function setBD(){
    const BD = DayData +'-' + MoData + '-' + YData
    setRegisterData({...registerData,Birthday: BD})
  }

  async function register() {
    const { Name, LastName, Gender, Nationality, Birthday, ID_Card_No, E_mail, Address, User_Name, Password } = registerData
   
    
    if (Name !== "" && LastName !== "" && Gender !== "" && Nationality !== "" && Birthday !== "" && ID_Card_No !== "" && E_mail !== "" && Address !== "" && User_Name !== "" && Password !== "" && DayData!== "" && MoData!== "" && YData!== "" ) {
      try {
        await axios.post('https://radiant-basin-59716.herokuapp.com/register', {...registerData,ID_Card_No:parseInt(ID_Card_No)} )
        Alert.alert (" เรียบร้อย ")
        navigate('Login')
      } catch (error) {
        Alert.alert (" ไม่เรียบร้อย ")
      }
    }else{
      Alert.alert (" กรอกไม่ครบ ")
    }
  }
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView behavior="height">
        <ScrollView style={{ backgroundColor: '#a52a2a' }}>
          <View style={styles.BackGViev}>
            <View style={styles.SingUpViev}>
              <Text style={styles.SingUpText}>
                กรอกข้อมูล
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>

              <View style={styles.Titlel}>
                <Text style={styles.TitleText}> ชื่อ*­ </Text>
                <Text style={styles.TitleText}> นามสกุล*­ </Text>
                <Text style={styles.TitleText}> เพศ*­ </Text>
              
                <Text style={styles.TitleText}> เลขรหัสประชาชน*­ </Text>
              
                <Text style={styles.TitleText}> สัญชาติ*­ </Text>
                <Text style={styles.TitleText}> ที่อยู่*­ </Text>
              </View>

              <View style={{ justifyContent: 'space-around' }}>
                <View style={{ paddingBottom: 5 }}>

                  <TextInput style={styles.TextInput1}
                    onChangeText={(Text) => {
                      setRegisterData({ ...registerData, Name: Text })
                    }}
                    value={registerData.Name} />
                   <Text style={styles.explain}>
                     ex. น.ส. พิชญาภัค
                     </Text> 
                </View>

                <View style={{ paddingBottom: 5 }}>
                  <TextInput style={styles.TextInput1}
                    onChangeText={(Text) => {
                      setRegisterData({ ...registerData, LastName: Text })
                    }}
                    value={registerData.LastName} /> 
                </View>

                <View style={{ paddingBottom: 5 , flexDirection: 'row'}}>
                  <TextInput style={styles.TextInput2}
                    onChangeText={(Text) => {
                      setRegisterData({ ...registerData, Gender: Text })
                    }}
                    value={registerData.Gender} />
                    <Text style={styles.explain1}>
                     ex. หญิง/ชาย
                     </Text> 
                </View>

                <View style={{ paddingBottom: 5 }}>
                  <TextInput style={styles.TextInput1}
                    onChangeText={(Text) => {
                      setRegisterData({ ...registerData, ID_Card_No: (Text) })
                    }}
                    value={registerData.ID_Card_No} />
                    <Text style={styles.explain2}>
                     ex. 15099xxxxxxxx กรุณากรอกให้ครบ 13 ตัว
                     </Text> 
                </View>

                <View style={{ paddingBottom: 5 , flexDirection: 'row'}}>
                  <TextInput style={styles.TextInput3}
                    onChangeText={(Text) => {
                      setRegisterData({ ...registerData, Nationality: Text })
                    }}
                    value={registerData.Nationality} />
                    <Text style={styles.explain1}>
                     ex. ไทย/จีน/อังกฤษ
                     </Text> 
                </View>
                <View style={{ paddingBottom: 5 }}>
                  <TextInput style={styles.TextInput1}
                    onChangeText={(Text) => {
                      setRegisterData({ ...registerData, Address: Text })
                    }}
                    value={registerData.Address} />
                    <Text style={styles.explain2}>
                     ex. 177 หมู่ 2 ต.น้อย อ.กลาง จ.ใหญ่ 50120
                     </Text> 
                </View>
              </View>

            </View>

            <View style={{ flexDirection: 'row' }}>

              <View style={styles.Title}>
                <Text style={styles.TitleText}> อีเมล*­ </Text>
              </View>

              <View>
                <TextInput style={styles.TextInput1}
                  onChangeText={(Text) => {
                    setRegisterData({ ...registerData, E_mail: Text })
                  }}
                  value={registerData.E_mail} />
              </View>
            </View>

            <View style={{ paddingTop: 5, paddingLeft: 20, paddingBottom: 20 }}>
              <Text style={styles.TitleText}> วัน/เดือน/ปีเกิด*­ </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 5 }}>

              <View style={styles.TextViewBD}>
                <Text style={styles.TitleText}> วัน </Text>
              </View>
              <TextInput style={styles.TextInput2}
                onChangeText={text => {
                  setDayData(text)
                  setBD()
                }}
                value={DayData} />

              <View style={styles.TextViewBD}>
                <Text style={styles.TitleText}> เดือน </Text>
              </View>

              <View style= {{flexDirection: 'column'}}>
              <TextInput style={styles.TextInput2}
                onChangeText={text => {
                  
                  setMoData(text)
                  setBD()
                }}
                value={MoData} />
                <Text style={styles.explain2}>
                     ex. ม.ค./มี.ค.
                </Text> 
                </View>

              <View style={styles.TextViewBD}>

                <Text style={styles.TitleText}> ปี</Text>
              </View>
              <TextInput style={styles.TextInput2}
                onChangeText={text => {
           
                  setYData(text)
                  setBD()
                }}
                value={YData} />
            </View>

          </View>
          <View style={{ paddingLeft: 30, paddingRight: 30 }}>
            <Separator />
          </View>

          <View style={styles.BackGViev2} >
            <View style={{ flexDirection: 'row' }}>

              <View style={styles.Titlell}>
                <Text style={styles.TitleText2}> ชื่อผู้ใช้*­ </Text>
                <Text style={styles.TitleText2}> รหัสผ่าน*­ </Text>
              </View>

              <View>
                <View style={{ paddingBottom: 5 }}>
                  <TextInput style={styles.TextInput1}
                    onChangeText={(Text) => {
                      setRegisterData({ ...registerData, User_Name: Text })
                    }}
                    value={registerData.User_Name} />
                </View>
                <View style={{ paddingBottom: 5 }}>
                  <TextInput style={styles.TextInput1}
                    onChangeText={(Text) => {
                      setRegisterData({ ...registerData, Password: Text })
                    }}
                    value={registerData.Password} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.BackGViev3} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button
                title="กลับ"
                text="Login"
                backgroundColor="#000080"
                color="#ffdead"
                rounded
                onPress={() => navigate('Login')}
              />
              <Button
                title="ยืนยัน"
                text="Home"
                backgroundColor="#000080"
                color="#ffdead"
                rounded
                onPress={ register}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  SingUpViev: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },
  SingUpText: {
    fontWeight: 'bold',
    fontSize: 40,

  },
  BackGViev: {
    backgroundColor: '#ffdead'
  },
  BackGViev2: {
    backgroundColor: '#a52a2a',
    paddingTop: 5,
    paddingBottom: 5,
  },
  BackGViev3: {
    backgroundColor: '#a52a2a',
    paddingBottom: 10,
    paddingLeft: 80,
    paddingRight: 80,

  },
  Title: {
    paddingLeft: 20,
    paddingEnd: 110,
    justifyContent: "space-around",
  },
  TitleText: {
    fontSize: 18,
  },
  
  TitleText2: {
    fontSize: 18,
    color: '#f8f8ff'
  },
  Titlel: {
    paddingLeft: 20,
    paddingEnd: 20,
    paddingBottom: 5,
    justifyContent: "space-around",
  },
  TextViewBD: {
    paddingTop: 5,
  },
  TextInput1: {
    height: 40,
    borderColor: '#ffdab9',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: '#ffffff',
    width: 200,
    color: '#000000',
    paddingLeft: 10
  },
  TextInput2: {
    height: 40,
    borderColor: '#ffdab9',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: '#ffffff',
    width: 70,
    color: '#000000',
    paddingLeft: 10
  },
  TextInput3: {
    height: 40,
    borderColor: '#ffdab9',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: '#ffffff',
    width: 100,
    color: '#000000',
    paddingLeft: 10
  },
  TextInput4: {
    height: 100,
    borderColor: '#ffdab9',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    width: 200,
    color: '#000000',
    paddingLeft: 10
  },
  Titlell: {
    paddingLeft: 50,
    paddingEnd: 30,
    justifyContent: "space-around",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#f8f8ff',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  explain: {
    color: '#708090',
    fontSize: 10,
    paddingLeft: 30,
  },
  explain1: {
    paddingTop: 10,
    color: '#708090',
    fontSize: 10,
    paddingLeft: 5,
  },
  explain2: {
    color: '#708090',
    fontSize: 10,
    
  }
});