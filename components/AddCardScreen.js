import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native';
import { _saveDeckTitle, _retrieveData } from '../utils/_cardsApi.js'

class AddCardScreen extends Component {

  state = {
    question: '',
    answer: ''
  }


  submit = (e) => {

   e.preventDefault()

   const { question , answer }  =  this.state

  }



  testSubmit = () => {
    const { title } = this.state
    _retrieveData(title)

  }

  render(){
    
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Add a New Card </Text>
        <TextInput
         style={{height: 100}}
         placeholder="Question"
         onChangeText={(question) => this.setState({question})}
         value={this.state.question}
        />
        <TextInput
         style={{height: 100}}
         placeholder="Answer"
         onChangeText={(answer) => this.setState({answer})}
         value={this.state.answer}
        />
        <Button 
        onPress={this.submit} 
        title="Create Deck"
        disabled={ this.state.question === '' &&  this.state.answer === '' ? true : false }
        ></Button>
      </View>
    )
  }
}


export default AddCardScreen;