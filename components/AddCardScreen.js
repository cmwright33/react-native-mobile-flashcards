import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native';
import { handleAddCardToDeck } from '../actions/decks.js'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation';

class AddCardScreen extends Component {

  state = {
    question: '',
    answer: '',
    cardId: this.props.navigation.getParam('itemId', 'NO-ID')
  }


  addCard = () => {

   const { cardId , answer, question } = this.state
   const { dispatch } = this.props
   dispatch(handleAddCardToDeck(cardId, { question:question, answer:answer }))
   this.setState( { answer: '', question: '' });
   this.props.navigation.pop();

  }


  render(){

    
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Add a New Card </Text>
        <TextInput
         style={{height: 40, width: 200, marginTop: 10, textAlign:'center', borderColor: 'gray', borderWidth: 1}}
         placeholder="Question"
         onChangeText={(question) => this.setState({question})}
         value={this.state.question}
        />
        <TextInput
        style={{height: 40, width: 200, marginTop: 10, textAlign:'center', borderColor: 'gray', borderWidth: 1}}
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

  function mapStateToProps ( { decks } ) {

    return {
      decks:decks
    }
  }


export default withNavigation(connect(mapStateToProps)(AddCardScreen));