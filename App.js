import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createBottomTabNavigator , createAppContainer , Platform } from 'react-navigation';
import AddDeck from './components/AddDeck.js'
import { FontAwesome, Ionicons } from '@expo/vector-icons'



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <AppContainer/>
    </View>
  );
}


const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  Test: {
    screen: Test,
    navigationOptions: {
      tabBarLabel: 'Test',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor:  '#FFF',
    style: {
      height: 56,
      backgroundColor: '#FEFE',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})


const AppContainer = createAppContainer(Tabs);

function Home( ){
  return (<View>
      <Text> Helloooo </Text>
    </View>)
}



function Test( ){
  return (<View>
      <Text> Helloooo </Text>
    </View>)
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
