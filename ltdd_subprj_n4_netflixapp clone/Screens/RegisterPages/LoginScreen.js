import React, {useState} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native'
const LoginScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState();
  return (
    <ImageBackground 
      source={require('../../assets/backgroundimg.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
      {/*Header*/}
        <TouchableOpacity style={styles.header}>
          <Image style={styles.logo} source={require('../../assets/logo-netflix.png')} />
        </TouchableOpacity>

      {/*Body*/}
        <View style={styles.signInContainer}>
          <Text style={styles.title}>Sign In</Text>
          {/*Text Field*/}
          <View style={styles.textField}>
            <TextInput style={styles.textInput} placeholder='Email or mobile number' placeholderTextColor="#8c8c8c" />
          </View>
          <View style={styles.textField}>
            <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor="#8c8c8c" />
          </View>

          {/*Sign in button*/}
          <TouchableOpacity style={styles.signInButton} onPress={()=>navigation.navigate('MoreScreen')}>
            <Text style={styles.buttonTitle}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>OR</Text>

          {/*Sign in button 2*/}
          <TouchableOpacity style={styles.signInButton2}>
            <Text style={styles.buttonTitle}>Use a Sign-In Code</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.conditionBox}>
            <TouchableOpacity 
              style={styles.checkBox} 
              onPress={() => setIsChecked(!isChecked)}>
              {isChecked && (
                <Icon name="check" size={20} color="#8c8c8c" />
              )}
            </TouchableOpacity>
            <Text style={styles.title2}>Remember me</Text>
          </View>
          <View style={styles.conditionBox}>
            <Text style={styles.title2}>New to Netflix? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>Sign up now.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    height: 75,
    padding: 12,
  },
  logo: {
    width: 150,
    height: 40,
  },
  signInContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 8,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  textField: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#8c8c8c',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
  },
  textInput: {
    color: 'white',
    width: '100%',
    height: '100%',
    outline: 'none'
  },
  signInButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#e50914',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  orText: {
    fontSize: 16,
    color: 'white',
    marginVertical: 10,
  },
  signInButton2: {
    width: '90%',
    height: 50,
    backgroundColor: '#8c8c8c',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  forgotPassword: {
    fontSize: 14,
    color: 'white',
    marginVertical: 10,
  },
  conditionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: 5,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#8c8c8c',
    borderRadius: 2,
    marginRight: 8,
  },
  title2: {
    fontSize: 14,
    color: 'white',
  },
  signUpText: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
});
export default LoginScreen;
