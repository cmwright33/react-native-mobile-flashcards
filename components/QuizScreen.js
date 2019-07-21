import React, { Component , Fragment } from 'react'
import { Text, View, Button } from 'react-native';
import Deck from './Deck.js'
import { _getDeck } from '../utils/_cardsApi.js'



class DeckDetailScreen extends Component {

  state = {
    correctAnswer: 0
    cardPostion: 0
    quizFinished: false
    questions: []
  }


  nextCard = () => {

    const { cardPostion, questions } =  this.state

    if(questions.length !== cardPostion ){

      if(!quizFinished){

        this.setState({ cardPostion: cardPostion + 1 })
      }

    }

  }

  answeredCorrect = () => {

    const { correctAnswer } = this.state


  }




  getData = ( ) => {
    const { navigation } = this.props;
    const id = navigation.getParam('itemId', 'NO-ID');
    _getDeck(id);
  }


  render(){

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const deck = navigation.getParam('deck');

    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        { 
          <Fragment>
          <Text> Name of Deck: { deck.title }</Text> 
          <Text> Number of Questions: { deck.questions.length }</Text>
          <Button 
            onPress={this.getData} 
            style={{fontSize: 20, backgroud:'blue', color: 'green'}} title="Add Card To Deck"
          ></Button>
          <Button title="Start Quiz"></Button>
          </Fragment>
        }
      </View>
    )
  }
}

export default DeckDetailScreen;