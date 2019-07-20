import decks from './_DATA.js'



// getDecks: return all of the decks along with their titles, questions, and answers.


_getDecks = ( ) => {

	return decks;

}


// getDeck: take in a single id argument and return the deck associated with that id. 


_getDeck = ( id ) => {

	const deck = decks[id]
	
	return deck;
}

// saveDeckTitle: take in a single title argument and add it to the decks. 

_saveDeckTitle = ( title ) => {
	

}


// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 

_addCardToDeck = ( title , card ) => {
	
}