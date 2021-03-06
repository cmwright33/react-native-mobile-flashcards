import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createBottomTabNavigator , createAppContainer, createStackNavigator, Platform } from 'react-navigation';
import AddDeckScreen from './components/AddDeckScreen.js'
import HomeScreen from './components/HomeScreen.js'
import DeckDetailScreen from './components/DeckDetailScreen.js'
import AddCardScreen from './components/AddCardScreen.js'
import QuizScreen from './components/QuizScreen.js'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { handleInitialData } from './actions/decks.js'
import { setLocalNotification } from './utils/_localNotification.js'
import {AsyncStorage} from 'react-native';
import {   intialSetUp,  } from './utils/_cardsApi.js'


const store = createStore(reducer, middleware)


const DeckStack = createStackNavigator({
  Home: HomeScreen,
  Details: DeckDetailScreen,
  AddCard: AddCardScreen,
  Quiz: QuizScreen
});

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: DeckStack
  },
  AddDeck: {
    screen: AddDeckScreen
  }
});

let Navigation = createAppContainer(AppNavigator);


export default class App extends React.Component {

  componentDidMount() {
    // AsyncStorage.clear();
    intialSetUp();
    store.dispatch(handleInitialData())
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

