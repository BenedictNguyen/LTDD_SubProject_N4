import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions, FlatList, Image } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import Icon from 'react-native-vector-icons/MaterialIcons';
import People from '../../data/People'
import * as ScreenOrientation from "expo-screen-orientation";
import { useFocusEffect } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function HomeScreenDetails({ navigation, route }) {
  const { item } = route.params;
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  function setOrientation() {
    if (Dimensions.get("window").height > Dimensions.get('window').width) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (videoRef.current) {
          videoRef.current.pauseAsync();
        }
      };
    }, [])
  );

  const PeopleList = () => {
    const castData = People.results;
    return (
      <FlatList
        data={castData}
        renderItem={({ item }) => (
          <View style={styles.castListItem}>
            <Image
              source={
                typeof item.profile_path === 'string'
                  ? { uri: `https://image.tmdb.org/t/p/w500${item.profile_path}` }
                  : item.profile_path[0]
              }
              style={styles.castImage}
            />
            <Text style={styles.castName}>{item.name}</Text>
            <Text style={styles.castOriginalName}>{item.character}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.castListContainer}
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : item.video && item.video.length > 0 ? (
        <Video
          ref={videoRef}
          style={styles.video}
          source={item.video[0]}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          onFullscreenUpdate={setOrientation}
          isLooping
          shouldPlay
          isMuted={false}
        />
      ) : (
        <Text style={{ color: "#fff" }}>No trailer available</Text>
      )}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title} - Trailer</Text>
        </View>
        <Text style={styles.releaseDate}>Coming Soon on {item.release_date}</Text>
        <Text style={styles.description}>{item.overview}</Text>

        {/*Cast List*/}
        <View style={styles.castGroup}>
          <PeopleList />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' color='white' size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name='home' color='white' size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MovieList')}>
          <Icon name='list' color='white' size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  contentContainer: {
    padding: 16,
    width: '100%',
    alignItems: 'flex-start'
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
    marginVertical: 10,
    fontFamily: "Roboto",
    textAlign: 'center',
  },
  releaseDate: {
    color: 'rgba(255, 255, 255, 0.83)',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 4,
  },
  description: {
    color: "#B4B4B3",
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'justify',
  },
  castGroup: {
    marginTop: 12,
  },
  castTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: 'center',
  },
  castListContainer: {
    paddingVertical: 10
  },
  castListItem: {
    alignItems: 'center',
    marginRight: 16,
    width: width * 0.25,
  },
  castImage: {
    width: '100%',
    height: width * 0.35,
    borderRadius: 8,
    marginBottom: 8,
  },
  castName: {
    color: "#fff",
    fontSize: 14,
    textAlign: 'center',
  },
  castOriginalName: {
    color: "#888",
    fontSize: 12,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#555',
    paddingHorizontal: 40,
  },
  listShareGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
    height: 50
  },
  addListGroup: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'white',
  }
});
