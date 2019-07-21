import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native';
import { _getDecks , _retrieveAllData } from '../utils/_cardsApi.js'
import Deck from './Deck.js'
import { AppLoading} from 'expo'



class HomeScreen extends Component {

  state = {
    decks: {},
    ready: false,
    asyncDeck: {}
  }

  //once component mounts pull all decks
  componentDidMount() {
    _retrieveAllData().then( (decks) => {
      this.setState({ decks })
      this.setState({ ready : true })
    })

  }

  render(){



    const { ready , decks , asyncDeck } = this.state



    if(ready === false){

      return <AppLoading/>

    }


    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        { 
          Object.keys(decks).map( (id) => {
              return <Deck key={id} deck={decks[id]} id={id}/>
        })
        }
      </View>
    )
  }
}

export default HomeScreen;