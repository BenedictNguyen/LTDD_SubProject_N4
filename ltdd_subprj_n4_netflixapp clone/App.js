import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './Screens/RegisterPages/SignUpScreen.js';
import LoginScreen from './Screens/RegisterPages/LoginScreen.js';
import HomeScreen from './Screens/HomePages/HomeScreen.js';
import CommingTrending from './Screens/CommingPage/CommingTrending.js';
import People from './Screens/PeoplePages/PeopleScreen.js';
import TV from './Screens/TVShowPages/TVShow.js';
import HomeScreenDetails from './Screens/HomePages/HomeScreenDetails.js';
import MoreScreen from './Screens/MorePages/MoreScreen.js';
import IntroScreen from './Screens/IntroPage/IntroScreen.js';
import PeopleDetails from './Screens/PeoplePages/PeopleDetails.js';
import MyListScreen from './Screens/MyListPages/MyListScreen.js';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
        initialRouteName="IntroScreen">
        {/*
        <Stack.Screen name="IntroScreen" component={IntroScreen}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/> 
        <Stack.Screen name="MoreScreen" component={MoreScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="TV" component={TV}/>
        <Stack.Screen name="People" component={People}/>
        <Stack.Screen name="CommingTrending" component={CommingTrending}/> 
        <Stack.Screen name="HomeScreenDetails" component={HomeScreenDetails}/>
        <Stack.Screen name="MyListScreen" component={MyListScreen}/>  
        */}

        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MoreScreen" component={MoreScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TV" component={TV} />
        <Stack.Screen name="People" component={People} />
        <Stack.Screen name="CommingTrending" component={CommingTrending} />
        <Stack.Screen name="HomeScreenDetails" component={HomeScreenDetails} />
        <Stack.Screen name="MyListScreen" component={MyListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}