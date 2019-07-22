import React, { Component } from 'react'
import { Text, View, TextInput, ScrollView ,  StyleSheet} from 'react-native';
import Deck from './Deck.js'
import { AppLoading} from 'expo'
import { connect } from 'react-redux'



class HomeScreen extends Component {
  render(){

    if(Object.entries(this.props.decks).length === 0 && this.props.decks.constructor === Object ){
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Please Add Some Decks!</Text>
          </View>
        )
    }

    return(
      <ScrollView contentContainerStyle={styles.contentContainer}>
        { 
          Object.keys(this.props.decks).map( (id) => {
              return <Deck key={id} deck={this.props.decks[id]} id={id}/>
        })
        }
      </ScrollView>
    )
  }
}

  function mapStateToProps ( { decks } ) {

    return {
      decks:decks
    }
  }

  const styles = StyleSheet.create({
    contentContainer: { alignItems: "center", justifyContent: "center" }
  });

export default connect(mapStateToProps)(HomeScreen);
