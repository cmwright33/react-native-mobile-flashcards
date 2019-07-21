import React, { Component , Fragment } from 'react'
import { Text, View, Button } from 'react-native';
import Deck from './Deck.js'
import { _getDeck } from '../utils/_cardsApi.js'




class DeckDetailScreen extends Component {


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
            onPress={  () => { navigation.navigate( 'AddCard', { itemId: this.props.id, deck: this.props.deck })} } 
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