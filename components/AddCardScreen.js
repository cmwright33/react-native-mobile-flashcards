import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native';
import { _saveDeckTitle, _retrieveData , _addCardToDeck} from '../utils/_cardsApi.js'

class AddCardScreen extends Component {

  state = {
    question: '',
    answer: '',
    cardId: this.props.navigation.getParam('itemId', 'NO-ID')
  }


  addCard = () => {

   const { cardId , answer, question } = this.state

   _addCardToDeck( cardId , { question:question, answer:answer } )

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
        onPress={this.addCard} 
        title="Create Deck"
        disabled={ this.state.question === '' ||  this.state.answer === '' ? true : false }
        ></Button>
      </View>
    )
  }
}


export default AddCardScreen;