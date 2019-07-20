import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native';
import { _getDecks } from '../utils/_cardsApi.js'
import Deck from './Deck.js'
import { AppLoading} from 'expo'



class HomeScreen extends Component {

  state = {
    decks: {},
    ready: false,
  }

  //once component mounts pull all decks
  componentDidMount() {
    _getDecks().then( (decks) => {
      this.setState({ decks })
      this.setState({ ready : true })
    })
  }

  render(){

    const { ready , decks } = this.state


    if(ready === false){

      return <AppLoading/>

    }


    Object.keys(decks).map( (id) => {
      console.log(decks[id].questions)  
      console.log(decks[id].title)  
    })

    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        { 
          Object.keys(decks).map( (id) => {
              return <Deck key={id} deck={decks[id]}/>
        })
        }
      </View>
    )
  }
}

export default HomeScreen;
