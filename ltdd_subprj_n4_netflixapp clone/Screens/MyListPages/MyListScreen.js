import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

export default function MyList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://671988e77fc4c5ff8f4dafcc.mockapi.io/api');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.listFilmContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.filmsInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.release_date}</Text>
        </View>
      <TouchableOpacity style={{borderWidth: 1, borderColor: 'white', borderRadius:50, width: 30, height: 30, justifyContent:'center', alignItems: 'center' }}> 
        <Icon name='play-arrow' size={24} color='white'/>
      </TouchableOpacity>
    </View> 
  );

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    {/* Header */}
      <View style={styles.header}>
        <View style={styles.groupTitle}>
          <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
            <Icon name='arrow-back' size={24} color='white'/>
          </TouchableOpacity>
          <Text style={styles.titleScreen}>My List</Text>
        </View>
        <TouchableOpacity>
          <Icon name='edit' size={24} color='white'/>
        </TouchableOpacity>
      </View>
    
    {/* Nav Bar */}
      <View style={styles.navBar}>
          <TouchableOpacity>
            <Text style={styles.navBarTitle}>Haven Started</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navBarTitle}>TV Shows</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navBarTitle}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navBarTitle}>People</Text>
          </TouchableOpacity>
        </View>

      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupTitle:{
    flexDirection: 'row',
    width: '30%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleScreen: {
    color: "white",
    fontSize: 20,
    fontFamily: 'Roboto'
  },
  listFilmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '97%',
    height: 100,
    borderRadius: 8,
    marginBottom: 12,
  },
  image: {
    width: '30%',
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  filmsInfo: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '60%',
    height: 50
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
});
