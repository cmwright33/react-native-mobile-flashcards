import React, { Component , Fragment } from 'react'
import { Text, View, Button } from 'react-native';
import Deck from './Deck.js'



class DeckDetailScreen extends Component {


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
          <Button style={{fontSize: 20, backgroud:'blue', color: 'green'}} title="Add To Deck"></Button>
          <Button title="Start Quiz"></Button>
          </Fragment>
        }
      </View>
    )
  }
}

export default DeckDetailScreen;