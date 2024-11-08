import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, Pressable, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TV from '../../data/TV'
import useNavigation from '@react-navigation/native'
const { width, height } = Dimensions.get('window');

const TVShow = ({ navigation, style }) => {
  return (
    <FlatList
      data={TV.results}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("TVShowDetails", { item })}
          style={{ ...styles.movieItem, ...style }}
        >
          <TouchableOpacity style={styles.movieItemContainer}  onPress={() => navigation.navigate("LoginScreen", LoginScreen)}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.movieImage}
            />
            <View style={styles.movieDetails}>
              <Text style={styles.movieTitle}>{item.name}</Text>
              <Text style={styles.movieReleaseDate}>{item.original_name}</Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal={false}
      numColumns={3}
      showsHorizontalScrollIndicator={true}
    />
  );
};

const CommingTrending = ({navigation}) => {
  return(
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo-netflix.png')} />
        <TouchableOpacity>
          <Icon name='search' color='white' size={30} />
        </TouchableOpacity>
      </View>
      {/* Body*/}
      <ScrollView>
        <View style={styles.body}>
          <TVShow/>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('MoreScreen')}><Icon name="arrow-back" color='white' size={30}/></TouchableOpacity>
        <TouchableOpacity><Icon name="home" color='white' size={30}/></TouchableOpacity>
        <TouchableOpacity><Icon name="list" color='white' size={30}/></TouchableOpacity>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 20,
  },
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
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  movieItemContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: width * 0.3,
    marginRight: 10,
  },
  movieImage: {
    width: '100%',
    height: height * 0.23,
    resizeMode: "cover",
    borderRadius: 10,
  },
  movieDetails: {
    marginTop: 5,
    alignItems: 'flex-start',
  },
  movieTitle: {
    color: "#fff",
    fontSize: 16,
  },
  movieReleaseDate: {
    color: "#888",
    fontSize: 12,
    marginTop: 4,
  },
  movieItem: {
    marginVertical: 5,
  },
  footer: {
    width: '95%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
export default CommingTrending;