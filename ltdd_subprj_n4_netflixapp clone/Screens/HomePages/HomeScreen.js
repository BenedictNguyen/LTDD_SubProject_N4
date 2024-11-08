import React, {useState} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, Pressable, Dimensions, ScrollView, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Movie from '../../data/Movies';
import People from '../../data/People';
import TV from '../../data/TV';
import LoginScreen from '../RegisterPages/LoginScreen';
import CommingTrending from '../CommingPages/CommingTrending'
import HomeScreenDetails from './HomeScreenDetails'
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get('window');

const MoviesList = ({ style }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={Movie.results}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreenDetails", { item, cast: item.cast })}
          style={[styles.movieItem, style]}
        >
          <View style={styles.movieItemContainer}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.movieImage}
            />
            <View style={styles.movieDetails}>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieReleaseDate}>{item.release_date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const PeopleList = ({ navigation, style }) => {
  return (
    <FlatList
      data={People.results}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("PeopleDetail", { item })}
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
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={true}
    />
  );
};

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
      horizontal={true}
      showsHorizontalScrollIndicator={true}
    />
  );
};
const categories = [
  {title: 'HOMEPAGE'},
  {title: 'CATEGORY', subcategories: ['ACTION', 'COMEDY', 'HOAT HINH', 'HORROR']},
  {title: 'NATION', subcategories:['USA', 'CHINA', 'JAPAN', 'AUSTRALIA', 'FRANCE']},
  {title: 'NEW FILMS', subcategories:['2024', '2023', '2022', '2021']},
  {title: 'TV SERIES'},
  {title: 'MOVIES'},
];

const HomeScreen = ({ navigation , route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const {image} = route.params || {};

  const toggleModal = ()=> {
    setModalVisible(!modalVisible)
  };
  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null: index)
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo-netflix.png')} />
        <View style={styles.groupBox}>
          <TouchableOpacity><Icon name='search' color='white' size={25}/></TouchableOpacity> 
          <TouchableOpacity><Icon name='notifications' color='white' size={25} /></TouchableOpacity>
          {/* Hàm xử lý route */}
          {image ? (
            <Image style={{width: 30, height: 30}} source={image}/>
          ):<Image style={{width: 30, height: 30}} source={image}/>
          }
        </View>
      </View>
      
      {/* Modal for Index */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {categories.map((category, index)=>(
            <View key={index}>
              <TouchableOpacity onPress={()=>toggleCategory(index)}>
                <Text style={styles.modalTitle}>{category.title}</Text>
              </TouchableOpacity>
              {expandedCategory === index && category.subcategories.length > 0 && (
                <View style={styles.subModalContainer}>
                  {category.subcategories.map((subCategory, subIndex)=>(
                    <TouchableOpacity key={subIndex}>
                      <Text style={styles.modalTitle}>{subCategory}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.closeButton}>CLOSE</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
    
    {/* Body */}
    <ScrollView>  
      <View style={styles.body}>
        {/* Nav Bar */}
        <View style={styles.navBar}>
          <TouchableOpacity
            onPressIn={()=> setIsHovered(true)}
          >
            <Text style={[styles.navBarTitle, isHovered && styles.navButtonHovered]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navBarTitle}>TV Shows</Text>
          </TouchableOpacity>
           <TouchableOpacity>
            <Text style={styles.navBarTitle}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyListScreen')}
          >
            <Text style={[styles.navBarTitle, isHovered && styles.navButtonHovered]}>My List</Text>
          </TouchableOpacity>
        </View>

        {/* Movies List */}
        <View style={styles.listType}>
          <View style={styles.listTitleBox}>
            <Text style={styles.listTitle}>Trending Now</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("CommingTrending")}>
              <Text style={styles.allText}>All</Text>
            </TouchableOpacity>
          </View>
          <MoviesList navigation={navigation} />
        </View>

        {/* People List */}
        <View style={styles.listType}>
          <View style={styles.listTitleBox}>
            <Text style={styles.listTitle}>People</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("People")}>
              <Text style={styles.allText}>All</Text>
            </TouchableOpacity>
          </View>
          <PeopleList navigation={navigation} />
        </View>

        {/* TVShows List */}
        <View style={styles.listType}>
          <View style={styles.listTitleBox}>
            <Text style={styles.listTitle}>TV Show</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("TV")}>
              <Text style={styles.allText}>All</Text>
            </TouchableOpacity>
          </View>
          <TVShow navigation={navigation} />
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  groupBox: {
    width: '30%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    height: 50,
    marginBottom: 10,
  },
  navBarTitle: {
    fontSize: 18,
    color: 'white',
  },
  listType: {
    width: '95%',
    paddingVertical: 10,
    showsVerticalScrollIndicator: 'true'
  },
  listTitleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  listTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  allText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 700
  },
  movieItemContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-star',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'centers',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '50%',
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  modalTitle: {
    fontSize: 18,
    color: 'white',
    marginVertical: 10,
  },
  closeButton: {
    fontSize: 16,
    color: 'red',
    marginTop: '20'
  },
  subModalContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'centers',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  navButtonHovered: {
    textDecorationLine: 'underline',
    textDecorationColor: 'red',
    fontWeight: 'bold'
  },
});

export default HomeScreen;