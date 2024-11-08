import React, {useState} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, Pressable, Dimensions, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

const MoreScreen = () => {
  const navigation = useNavigation();
  
  {/* Hàm chọn user */}
  const selectUser = (image)=> {
    navigation.navigate('HomeScreen', {image})
  }
  
  return(
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Qui est-ce ?</Text>
        <View style={styles.screenCotainer}>
          <View style={styles.groupItem}>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen', {image: require('../../data/images/UserAvatars/User1.png')})}>
              <Image source={require('../../data/images/UserAvatars/User1.png')}/></TouchableOpacity>
            <Text style={styles.titleItem}>User1</Text>
          </View>
          <View style={styles.groupItem}>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen', {image: require('../../data/images/UserAvatars/User2.png')})}>
              <Image source={require('../../data/images/UserAvatars/User2.png')}/></TouchableOpacity>
            <Text style={styles.titleItem}>User2</Text>
          </View>
          <View style={styles.groupItem}>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen', {image: require('../../data/images/UserAvatars/Kids.png')})}>
              <Image source={require('../../data/images/UserAvatars/Kids.png')}/></TouchableOpacity>
            <Text style={styles.titleItem}>Kids</Text>
          </View>
           <View style={styles.groupItem}>
            <TouchableOpacity style={styles.addUser}>
              <Icon name="add" color="white" size={30}/>
            </TouchableOpacity>
            <Text style={styles.titleItem}>Add new profile</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.generateBtn}>
          <Text style={styles.titleItem}>Generate all user</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: '30%',
    // backgroundColor: 'red'
  },
  screenCotainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 100
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: '24',
    color: 'white'
  },
  groupItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  titleItem: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '14',
  },
  addUser: {
    height: 60,
    width: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  generateBtn: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default MoreScreen;