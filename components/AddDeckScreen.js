import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native';
import { handleAddDeck } from '../actions/decks.js'
import { connect } from 'react-redux'

class AddDeckScreen extends Component {

  state = {
    title: ''
  }


  submit = (e) => {

   e.preventDefault()

   const {dispatch} = this.props
   const { title }  = this.state
   dispatch(handleAddDeck(title))
  //  const { title }  =  this.state
  //   _saveDeckTitle(title).then( () => {
  //     this.setState({title: ''});
  //   })
  // }

  // testSubmit = () => {
  //   const { title } = this.state
  //   _retrieveData(title)

  }

  render(){
    
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Please Name The New Deck You Are Creating! </Text>
        <TextInput
         style={{height: 100}}
         placeholder="Name the Deck!"
         onChangeText={(title) => this.setState({title})}
         value={this.state.title}
        />
        <Button 
        onPress={this.submit} 
        title="Create Deck"
        disabled={ this.state.title === '' ? true : false }
        ></Button>
      </View>
    )
  }
}

  function mapStateToProps ( { decks } ) {

    return {
      decks:decks
    }
  }


export default connect(mapStateToProps)(AddDeckScreen);