import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native';


class AddDeck extends Component {

  state = {
    text: ''
  }

  render(){
    
    return(
      <View>
        <Text> add entry </Text>
        <TextInput
         style={{height: 100}}
         placeholder="Name the Deck!"
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
        />
      </View>
    )
  }
}


export default AddDeck;