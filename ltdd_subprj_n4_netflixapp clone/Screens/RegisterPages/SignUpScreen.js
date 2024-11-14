import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUpScreen = () => {
  const navigation = useNavigation(); 
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignUp = () => {
    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    } 
    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setErrorMessage('');
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Image style={{ width: 150, height: 40 }} source={require('../../assets/logo-netflix.png')} />
        <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
          <Text style={styles.title}>Sign In</Text>
        </TouchableOpacity>
      </View>
      
      {/*Body*/}
      <View style={styles.body}>
        <View style={styles.subBody}>
          <Text style={styles.title}>Create a password to start your membership</Text>
          <Text style={styles.title2}>Just a few more steps and you are done! {'\n'}We hate paperwork, too.</Text>
          
          {/* Email Input */}
          <View style={styles.textField}>
            <TextInput 
              style={styles.textInput} 
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          {/* Password Input */}
          <View style={styles.textField}>
            <TextInput 
              style={styles.textInput} 
              placeholder="Add a password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          {/* Error Message */}
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}

          <View style={styles.conditionBox}>
            <TouchableOpacity style={styles.checkBox} onPress={() => setIsChecked(!isChecked)}>
              {isChecked && (
                <Icon name="check" size={20} color="#8c8c8c" />
              )}
            </TouchableOpacity>
            <Text style={styles.title2}>Please do not email me Netflix special offers</Text>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSignUp}>
            <Text style={styles.submitText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 12
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 75,
    borderBottomWidth: 1,
    borderColor: '#8c8c8c',
    padding: 12,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 500,
    padding: 12
  },
  subBody: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
    height: 400,
  },
  title2: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  textField: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#8c8c8c',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  textInput: {
    width: '100%',
    height: '100%',
    outlineStyle: 'none',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  conditionBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  checkBox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#8c8c8c',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: "#e50914",
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default SignUpScreen;
