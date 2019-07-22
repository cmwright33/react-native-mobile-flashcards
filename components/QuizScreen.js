import React, { Component , Fragment } from 'react'
import { Text, View, Button } from 'react-native';
import { handleGetDeck } from '../actions/decks.js'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'
import { AppLoading} from 'expo'
import { setLocalNotification , clearLocalNotification } from '../utils/_localNotification.js'



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

  nextCard = (correct) => {

    this.setState((prevState, props) => ({
    cardPostion: prevState.cardPostion + 1
    }));

    if(correct){
      this.setState((prevState, props) => ({
        correctAnswer: prevState.correctAnswer + 1
      }));
    }

  }

  reset = () =>{

    this.setState((prevState, props) => ({
      cardPostion: 0,
      correctAnswer: 0
    }));
    this.forceUpdate();
  }



  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }



  render(){



    const { deck , cardPostion , isHidden, correctAnswer } = this.state

    if(Object.entries(deck).length === 0 && deck.constructor === Object ){
       return <AppLoading/>
    }

    if(deck.questions  === undefined || deck.questions.length === 0 ){
      return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Please Add Cards!</Text>
          </View>
        )
    }

    if( ( ( cardPostion - 1 )  === deck.questions.length ) || deck.questions[cardPostion] === undefined ){
      clearLocalNotification().then(setLocalNotification);
      return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Ya Done</Text>
            <Text>Correct Answers: { correctAnswer } / { deck.questions.length }</Text>
            <Button 
              title='Start Over'
              onPress={this.reset}
              />
             <Button 
              title='Back to Deck'
              onPress={ () => { this.props.navigation.pop() }}
              />

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
          />
          <Button 
          title='Correct'
          onPress={ ()=> { this.nextCard(true) }  }
          />
          <Button 
          title='Incorrect'
          onPress={ ()=> { this.nextCard(false) } }
          />
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