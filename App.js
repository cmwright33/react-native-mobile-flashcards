import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createBottomTabNavigator , createAppContainer, createStackNavigator, Platform } from 'react-navigation';
import AddDeckScreen from './components/AddDeckScreen.js'
import HomeScreen from './components/HomeScreen.js'
import DeckDetailScreen from './components/DeckDetailScreen.js'
import AddCardScreen from './components/AddCardScreen.js'
import { FontAwesome, Ionicons } from '@expo/vector-icons'




const DeckStack = createStackNavigator({
  Home: HomeScreen,
  Details: DeckDetailScreen,
  AddCard: AddCardScreen
});

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: DeckStack
  },
  AddDeck: {
    screen: AddDeckScreen
  }
});

export default createAppContainer(AppNavigator);


