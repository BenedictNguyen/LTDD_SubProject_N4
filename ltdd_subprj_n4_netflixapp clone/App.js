import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './Screens/RegisterPages/SignUpScreen';
import LoginScreen from './Screens/RegisterPages/LoginScreen';
import HomeScreen from './Screens/HomePages/HomeScreen';
import CommingTrending from './Screens/CommingPages/CommingTrending'
import People from './Screens/PeoplePages/PeopleScreen'
import TV from './Screens/TVShowPages/TVShowScreen'
import HomeScreenDetails from './Screens/HomePages/HomeScreenDetails'
import MoreScreen from './Screens/MorePages/MoreScreen'
import IntroScreen from './Screens/IntroPage/IntroScreen'
import PeopleDetails from './Screens/PeoplePages/PeopleScreenDetails'
import MyListScreen from './Screens/MyListPages/MyListScreen'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
        initialRouteName="Home">
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
        <Stack.Screen name="MoreScreen" component={MoreScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="MyListScreen" component={MyListScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}