import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'


class Deck extends Component{

  render(){
    
    const { navigate } = this.props.navigation;

    return(
      <TouchableOpacity
          onPress={  () => { navigate( 'Details', { itemId: this.props.id })} } 
          style={{ flex: 1, alignItems: "center", justifyContent: "center", height: 80, borderRadius:5, width: 200, marginTop:10,  borderColor: 'gray', borderWidth: 1 }}>
        <Text> Name of Deck: { this.props.deck.title }</Text> 
        <Text> Number of Questions: { this.props.deck.questions.length }</Text>
      </TouchableOpacity>
    )
  }
}


  function mapStateToProps ( { decks } , { id } ) {

    return {
      deck:decks[id],
      id: id
    }
  }


export default withNavigation(connect(mapStateToProps)(Deck));
