import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native';


class AddDeckScreen extends Component {

  state = {
    text: ''
  }

  render(){
    
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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


export default AddDeckScreen;