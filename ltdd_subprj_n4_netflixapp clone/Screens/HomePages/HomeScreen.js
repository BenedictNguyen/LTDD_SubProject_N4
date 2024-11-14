import React, { useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, ScrollView, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Movie from '../../data/Movies';
import People from '../../data/People';
import TV from '../../data/TV';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const MoviesList = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  // Hàm di chuyển danh sách
  const scroll = (direction) => {
    const offset = flatListRef.current?.contentOffset.x || 0;
    flatListRef.current?.scrollToOffset({
      offset: offset + direction * width * 0.8,
      animated: true,
    });
  };

  return (
    <View style={styles.listContainer}>
      <TouchableOpacity onPress={()=>scroll(-1)} style={styles.scrollButton}>
        <Icon name='chevron-left' size={30} color='white'/>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={Movie.results}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreenDetails", { item, cast: item.cast })}
            style={styles.movieItem}
          >
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.movieImage}
            />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <TouchableOpacity onPress={()=>scroll(1)} style={styles.scrollButton}>
        <Icon name='chevron-right' size={30} color='white'/>
      </TouchableOpacity>
    </View>
  );
};

const PeopleList = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  // Hàm di chuyển danh sách
  const scroll = (direction) => {
    flatListRef.current?.scrollToOffset({
      offset: flatListRef.current.contentOffset.x + direction * width * 0.8,
      animated: true,
    });
  };

  return (
    <View style={styles.listContainer}>
      <TouchableOpacity onPress={()=>scroll(-1)} style={styles.scrollButton}>
        <Icon name='chevron-left' size={30} color='white'/>
      </TouchableOpacity>
      <FlatList
        data={People.results}
        renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("PeopleDetail", { item })}
          style={styles.movieItem}
        >
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.profile_path}` }}
            style={styles.peopleImage}
          />
            <Text style={styles.movieTitle}>{item.name}</Text>
        </TouchableOpacity>
          )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <TouchableOpacity onPress={()=>scroll(1)} style={styles.scrollButton}>
        <Icon name='chevron-right' size={30} color='white'/>
      </TouchableOpacity>
    </View>
  );
};

const TVShowList = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  // Hàm di chuyển danh sách
  const scroll = (direction) => {
    flatListRef.current?.scrollToOffset({
      offset: flatListRef.current.contentOffset.x + direction * width * 0.8,
      animated: true,
    });
  };
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity onPress={()=>scroll(-1)} style={styles.scrollButton}>
        <Icon name='chevron-left' size={30} color='white'/>
      </TouchableOpacity>
      <FlatList
        data={TV.results}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("TVShowDetails", { item })}
            style={styles.movieItem}
          >
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.tvShowImage}
            />
            <Text style={styles.movieTitle}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <TouchableOpacity onPress={()=>scroll(1)} style={styles.scrollButton}>
        <Icon name='chevron-right' size={30} color='white'/>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { image } = route.params || {};

  const openSearchModal = () => setSearchModalVisible(true);
  const closeSearchModal = () => setSearchModalVisible(false);

// Loc phim khi nhap vao ten phim
  const filteredMovies = Movie.results.filter(movie =>
    movie.title && movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerGroup1}>
          <Image style={styles.logo} source={require('../../assets/logo-netflix.png')}/>
           {/* Nav Bar */}
           <View style={styles.navBar}>
            <TouchableOpacity><Text style={styles.navBarTitle}>Home</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navBarTitle}>TV Shows</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navBarTitle}>Movies</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navBarTitle}>Originals</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MyListScreen')}><Text style={styles.navBarTitle}>My List</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={openSearchModal}>
            <Icon name="search" color="white" size={25} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="notifications" color="white" size={25} style={styles.icon} />
          </TouchableOpacity>
          <Image style={styles.profileImage} source={image || require('../../assets/snack-icon.png')} />
        </View>
      </View>

      {/* Search Modal */}
      <Modal animationType="slide" transparent visible={searchModalVisible} onRequestClose={closeSearchModal}>
        <View style={styles.searchModalContainer}>
          <View style={styles.searchModalContent}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for movies, people, or TV shows..."
              placeholderTextColor="#888"
              value={searchText}
              onChangeText={setSearchText}
            />
           
            <FlatList
              data={filteredMovies}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    closeSearchModal();
                    navigation.navigate('HomeScreenDetails', { item, cast: item.cast });
                  }}
                  style={styles.searchResultItem}
                >
                  <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.movieImage} />
                  <Text style={styles.movieTitle}>{item.title}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
              style={styles.searchResults}
            />
            <TouchableOpacity onPress={closeSearchModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Body */}
      <ScrollView>
        <View style={{marginTop: 30, height: 500}}>
          {/* Sections */}
          <Section title="Trending Now" navigateTo="CommingTrending" navigation={navigation}>
            <MoviesList />
          </Section>
          <Section title="People" navigateTo="People" navigation={navigation}>
            <PeopleList />
          </Section>
          <Section title="TV Shows" navigateTo="TVShowDetails" navigation={navigation}>
            <TVShowList />
          </Section> 
        </View>
      </ScrollView>
    </View>
  );
};

const Section = ({ title, children, navigateTo, navigation }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity style={styles.groupButtonAll} onPress={() => navigation.navigate(navigateTo)}>
        <Text style={styles.viewAll}>All</Text>
        <Icon name='arrow-forward' size={24} color='#888'/>
      </TouchableOpacity>
    </View>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%'
  },
  headerGroup1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '30%',
  },
  logo: {
    width: 150,
    height: 40,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 200,
  },
  icon: {
    marginHorizontal: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    height: '50%',
    width: 500,
    marginLeft: 50
  },
  navBarTitle: {
    color: 'white',
    fontSize: 16,
  },
  section: {
    paddingVertical: 20
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  groupButtonAll: {
    flexDirection: 'row',
    width: '10%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  viewAll: {
    color: '#888',
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieItem: {
    width: 200,
    marginRight: 10,
    height: '100%'
  },
  movieImage: {
    width: '100%',
    height: 300,
    borderRadius: 5,
  },
  peopleImage: {
    width: '100%',
    height: 500,
    borderRadius: 5,
  },
  tvShowImage: {
    width: '100%',
    height: 400,
    borderRadius: 5,
  },
  movieTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  searchModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  searchModalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color: 'white',
    marginBottom: 10,
  },
  closeButton: {
    color: 'red',
    fontSize: '20',
    fontWeight: 700,
    marginTop: '5'
  },
  searchResults: {
    marginTop: 10,
    maxHeight: height * 0.5,
  },
  searchResultItem: {
    alignItems: 'center',
    marginBottom: 15,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollButton: {
    padding: 5,
  },
});

export default HomeScreen;
