import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const IntroScreen = () => {
  const [showLogo, setShowLogo] = useState(true);
  const videoRef = useRef(null);
  const navigation = useNavigation();

  const handleGetStarted = () => {
    setShowLogo(false);
    videoRef.current.playAsync();
  };

  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      navigation.navigate('Sign Up');
    }
  };

  return (
    <View style={styles.container}>
      {/* Display the background video */}
      <Video
        ref={videoRef}
        source={require('../../data/videos/Netflixloading.mp4')}
        style={styles.video}
        resizeMode="cover"
        isLooping={false}
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        shouldPlay={!showLogo}
      />
      {showLogo && (
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo-netflix.png')}
            style={styles.logo}
          />
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      )}
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
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Ensures logo and button are above the video
  },
  logo: {
    width: 150,
    height: 75,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#E50914',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default IntroScreen;
