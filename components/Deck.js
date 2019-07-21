import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';


class Deck extends Component{

  render(){
    
    const { navigate } = this.props.navigation;

    return(
      <TouchableOpacity
            onPress={  () => { navigate( 'Details', { itemId: this.props.id, deck: this.props.deck })} } 
           style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Name of Deck: { this.props.deck.title }</Text> 
        <Text> Number of Questions: { this.props.deck.questions.length }</Text>
      </TouchableOpacity>
    )
  }
}


export default withNavigation(Deck);
