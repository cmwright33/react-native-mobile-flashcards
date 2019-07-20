import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native';


class Deck extends Component{

  render(){
    console.log('got here');
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Name of Deck: { this.props.deck.title }</Text> 
        <Text> Number of Questions: { this.props.deck.questions.length }</Text>
      </View>
    )
  }
}


export default Deck;