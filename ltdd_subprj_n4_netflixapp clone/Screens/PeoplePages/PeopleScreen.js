import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, Pressable, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Movie from '../../data/Movies';
import People from '../../data/People'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const PeopleList = ({ navigation, style }) => {
  return (
    <FlatList
      data={People.results}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate({ item })} //Thêm vào navigation để chuyển sang PeopleScreenDetails chỗ này
          style={{ ...styles.movieItem, ...style }}
        >
          <View style={styles.movieItemContainer}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.profile_path}` }}
              style={styles.movieImage}
            />
            <View style={styles.movieDetails}>
              <Text style={styles.movieTitle}>{item.name}</Text>
              <Text style={styles.movieReleaseDate}>{item.original_name}</Text>
            </View>
          </View>
        </Pressable>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.movieList}
    />
  );
};

const PeopleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo-netflix.png')} />
        <TouchableOpacity>
          <Icon name='search' color='white' size={30} />
        </TouchableOpacity>
      </View>
      {/* Body */}
      <ScrollView contentContainerStyle={styles.body}>
        <PeopleList navigation={navigation} />
      </ScrollView>
      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('MoreScreen')}>
          <Icon name="arrow-back" color='white' size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="home" color='white' size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="list" color='white' size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    height: 60,
    paddingTop: 20,
    marginBottom: 10,
  },
  logo: {
    width: width * 0.4,
    height: height * 0.05,
    resizeMode: 'contain',
  },
  body: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 10,
  },
  movieList: {
    paddingHorizontal: 10,
  },
  movieItemContainer: {
    width: width * 0.3,
    marginVertical: 10,
    alignItems: 'center',
  },
  movieImage: {
    width: '100%',
    height: width * 0.45,
    resizeMode: "cover",
    borderRadius: 10,
  },
  movieDetails: {
    alignItems: 'center',
    marginTop: 5,
  },
  movieTitle: {
    color: "#fff",
    fontSize: 14,
    textAlign: 'center',
  },
  movieReleaseDate: {
    color: "#888",
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    paddingVertical: 10,
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: '#555',
  }
});

export default PeopleScreen;
