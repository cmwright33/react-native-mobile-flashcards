import React, { Component , Fragment } from 'react'
import { Text, View, Button } from 'react-native';
import Deck from './Deck.js'
import { connect } from 'react-redux'
import { AppLoading} from 'expo'
import { withNavigation } from 'react-navigation';




class DeckDetailScreen extends Component {


  render(){

    const { navigation, decks } = this.props;
    const id = navigation.getParam('itemId', 'NO-ID');

    if(this.props.decks[id] === undefined ){
       return <AppLoading/>
    }


    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        { 
          <Fragment>
          <Text> Name of Deck: { decks[id].title }</Text> 
          <Text> Number of Questions: { decks[id].questions.length }</Text>
          <Button 
            onPress={  () => { navigation.navigate( 'AddCard', { itemId: id, deck: decks[id] })} } 
            style={{fontSize: 20, backgroud:'blue', color: 'green'}} title="Add Card To Deck"
          />
          <Button 
            onPress={  () => { navigation.navigate( 'Quiz', { itemId: id, deck: decks[id] })} } 
            title="Start Quiz"

            />
          </Fragment>
        }
      </View>
    )
  }
}

  function mapStateToProps ( { decks } ) {

    return {  
      decks:decks,
    }
  }


export default connect(mapStateToProps)(DeckDetailScreen);
