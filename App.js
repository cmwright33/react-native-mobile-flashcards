import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createBottomTabNavigator , createAppContainer , Platform } from 'react-navigation';
import AddDeckScreen from './components/AddDeckScreen.js'
import { FontAwesome, Ionicons } from '@expo/vector-icons'



function HomeScreen( ){
  return (<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Home </Text>
    </View>)
}



function TestScreen( ){
  return (<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Test! </Text>
    </View>)
}

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  AddDeck: {
    screen: AddDeckScreen
  }
});

export default createAppContainer(AppNavigator);


