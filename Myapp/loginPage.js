import React,{useState} from "react";
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 


    export default function LoginPage({navigation}) {
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
    
      const validUsername = 'Hyper';
      const validEmail = 'hyper@gmail';
    
      const handleLogin = () => {
        if (username === validUsername && email === validEmail) {
          navigation.navigate('Home',{ username, email });
        } else {
          alert('Incorrect Username or Email');
        }
      }
    
      return (
         <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
              
              <View style={styles.profile}>
                <View style={styles.text}>
                  <Text style={styles.txt}>Jobizz</Text>
                  <Text style={styles.welcome}>Welcome Back 👋</Text>
                  <Text style={styles.apply}>Let's log in. Apply to jobs!</Text>
                </View>
                <View style={styles.field}>
                  <View style={styles.name}>
                    <TextInput 
                      placeholder='Name'
                      style={styles.nameText}
                      onChangeText={(text) => setUsername(text)}
                    />
                  </View>
                  <View style={styles.name}>
                    <TextInput 
                      placeholder='Email'
                      style={styles.nameText}
                      onChangeText={(text) => setEmail(text)}
                    />
                  </View>
                  <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={styles.separatorContainer}>
                  <View style={styles.line} />
                  <Text style={styles.continueText}>Or continue with</Text>
                  <View style={styles.line} />
                </View>
              <View style={styles.centeredLogoContainer}>
                <View style={styles.logoContainer}>
                  <View style={styles.logoBox}>
                  <TouchableOpacity>
                    <Image style={styles.logo} source={require('./assets/vector.png')} />
                  </TouchableOpacity>
                  </View>
                  <View style={styles.logoBox}>
                  <TouchableOpacity>
                   <Image style={styles.logo} source={require('./assets/google.png')}/> 
                  </TouchableOpacity>
                  </View>
                  <View style={styles.logoBox}>
                  <TouchableOpacity>
                    <Image style={styles.logo} source={require('./assets/facebook.png')}/>
                  </TouchableOpacity>
                  </View>
                </View>
                </View>
    
                  <View style={styles.register}>
                  <Text style={styles.registerText}>
                     Don't have an account?{' '}
                    <Text style={styles.registerLink}>Register</Text>
                  </Text>
                  </View>

              </View>
    
              <StatusBar style="auto" />
            </View>
          </SafeAreaView>
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      safeArea: {
        flex: 1,
      },
      container: {
        flex: 1,
        padding: 30,
      },
      profile: {
        flex: 1,
        top: 0,
        flexDirection: 'column',
      },
      text: {
        gap: 15,
      },
      txt: {
        color: '#356899',
        fontSize: 28,
        fontWeight: 'bold',
      },
      welcome: {
        fontSize: 34,
        fontWeight: '600',
      },
      apply: {
        fontSize: 20,
        color: '#AFB0B6',
      },
      field: {
        marginTop: 40,
        gap: 20,
      },
      name: {
        borderWidth: 1,
        borderColor: '#AFB0B6',
        borderRadius: 15,
        padding: 5,
        height: 60,
        justifyContent: 'center',
      },
      nameText: {
        fontSize: 18,
        marginLeft: 15,
      },
      loginButton: {
        marginTop: 20,
        backgroundColor: '#356899',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
      },
      loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60,
      },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: '#AFB0B6',
      },
      continueText: {
        marginHorizontal: 10,
        fontSize: 16,
        color: '#AFB0B6',
      },
      centeredLogoContainer: {
        alignItems: 'center', 
      },
      logoContainer: {
        width:216,
        height: 56,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
      },
      logoBox:{
        justifyContent: 'space-evenly',
        width: 56,
        height: 56,
      },
      logo: {
        width:30,
        height:30,
        left:12,
        borderRadius: 50,
      },

      register: {
        marginTop: 50,
        flexDirection: 'row', 
        justifyContent: 'center', 
      },
      registerText: {
        color: '#BDBEC2',
        fontSize: 16,
      },
      registerLink: {
        color: '#356899',
        fontSize: 16,
        marginLeft: 5, 
      },
      
    });
    
