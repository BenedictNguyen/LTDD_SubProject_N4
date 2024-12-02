import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, Pressable, Dimensions, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../assets/logo-netflix.png')} />
      <View style={styles.groupBox}>
        <TouchableOpacity><Icon name='search' color='white' size={25} /></TouchableOpacity>
        <TouchableOpacity><Icon name='notifications' color='white' size={25} /></TouchableOpacity>
        <Image style={{ width: 30, height: 30 }} source={require('../data/images/Emenaldo.png')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: 60,
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  groupBox: {
    width: '30%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})
export default HeaderComponent;
