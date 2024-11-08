import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import { useRoute } from '@react-navigation/native';

const PeopleDetails = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent/>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 24,
    color: '#fff',
    marginTop: 10,
  },
  overview: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  movie: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  movieImage: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  movieTitle: {
    fontSize: 16,
    color: '#fff',
  },
});

export default PeopleDetails;
