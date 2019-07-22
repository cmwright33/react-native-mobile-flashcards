export const GET_DECKS  = 'GET_DECKS' 
export const GET_DECK  = 'GET_DECk' 
export const ADD_DECK  = 'ADD_DECK' 
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
import { _getDecks , intialSetUp, _saveDeckTitle, _addCardToDeck } from '../utils/_cardsApi.js'



export function getDecks (decks) {
  return {
    type: GET_DECKS,
    decks,
  }
}

export function getDeck (deck) {
  return {
    type: GET_DECK,
    deck,
  }
}

 
export function addDeck (title) {
	console.log('testing 2')
	return {
		type: ADD_DECK,
		title,
	}
}



export function addCardToDeck(payload){
	return {
		type: ADD_CARD_TO_DECK,
		payload
	}
}


export function handleInitialData() {
  return (dispatch) => {
    return _getDecks()
      .then(( data ) => {
        dispatch(getDecks(data))
      })
  }
}

export function handleGetDeck() {
  return (dispatch) => {
    return _getDeck()
      .then(( data ) => {
        dispatch(getDeck(data))
      })
  }
}


export function handleAddDeck (title){
	return(dispatch) => {
		return _saveDeckTitle(title)
		.then(() => {
				dispatch(addDeck(title))
			}
		)
	}
}


export function handleAddCardToDeck (cardId, card){
	return(dispatch) => {
		return _addCardToDeck( cardId , card ).then(() => {
				console.log('this is going to execute');
				const payload = { id:cardId, card:card }
				dispatch(addCardToDeck( payload ))
			}
		)
	}
}