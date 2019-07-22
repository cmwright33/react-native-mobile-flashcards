import React, { Component , Fragment } from 'react'
import { Text, View, Button } from 'react-native';
import Deck from './Deck.js'
import { handleGetDeck } from '../actions/decks.js'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'



class QuizScreen extends Component {

  state = {
    deck:{},
    correctAnswer: 0,
    cardPostion: 0,
    quizFinished: false,
    isHidden: true
  }

  componentDidMount = () => {
    const id = this.props.navigation.getParam('itemId', 'NO-ID');
    const { decks } = this.props
    this.setState({ deck:decks[id]});
  }

  nextCard = () => {
    console.log(this.state.cardPostion );
    const { cardPostion } = this.state
    this.setState({ cardPostion: cardPostion + 1 } )
    console.log(this.state.cardPostion );
    this.forceUpdate();
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  answeredCorrect = () => {

    const { correctAnswer } = this.state

  }


  render(){

    const { deck , cardPostion , isHidden, correctAnswer } = this.state


    if(deck.questions  === undefined || deck.questions.length === 0 ){
      return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Please Add Cards!</Text>
            <Button title='Back'></Button>
          </View>

        )
    }

    if( ( cardPostion - 1 )  === deck.questions.length  ){
      return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Ya Done</Text>
          </View>

        )
    }

    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        
          <Fragment>
          <Text>{ deck.questions[cardPostion].question }</Text>
          {!isHidden &&
              <Text>{ deck.questions[cardPostion].answer }</Text>

          }
          <Text>Correct Answers: { correctAnswer } / { deck.questions.length }</Text>
          <Button 
          title='Show Answer'
          onPress={this.toggleHidden.bind(this)}
          ></Button>
          <Button 
          title='Correct'
          onPress={this.nextCard}
          ></Button>
          <Button title='Incorrect'></Button>
          </Fragment>
        
      </View>
    )
  }
}



  function mapStateToProps ( { decks } ) {
      
    return {
      decks:decks,
    }
  }


export default withNavigation(connect(mapStateToProps)(QuizScreen));