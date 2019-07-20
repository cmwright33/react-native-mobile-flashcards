import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createBottomTabNavigator , createAppContainer , Platform } from 'react-navigation';
import AddDeckScreen from './components/AddDeckScreen.js'
import HomeScreen from './components/HomeScreen.js'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { _getDecks } from './utils/_cardsApi.js'



const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  AddDeck: {
    screen: AddDeckScreen
  }
});

export default createAppContainer(AppNavigator);


