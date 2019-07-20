import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <Text>Open up App.js to start working on your app!</Text>
      <AddDeck/>
    </View>
  );
}


function Home( ){
  return (<View>
      <Text> Helloooo </Text>
    </View>)
}


function AddDeck( ){
  return (<View>
      <Text> add entry </Text>
      <TextInput
       placeholder="Name the Deck!"
      />
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
