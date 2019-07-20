import decks from './_DATA.js'



// getDecks: return all of the decks along with their titles, questions, and answers.

export function _getDecks () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks}), 1000)
  })
}

// getDeck: take in a single id argument and return the deck associated with that id. 


export function _getDeck( id ) {

	const deck = decks[id]
	
	return deck;
}

// saveDeckTitle: take in a single title argument and add it to the decks. 

export function _saveDeckTitle( title ) {
	

}


// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 

export function _addCardToDeck( title , card ) {
	
}