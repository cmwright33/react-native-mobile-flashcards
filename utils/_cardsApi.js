import decks from './_DATA.js'
import {AsyncStorage} from 'react-native';
export const DECK_STORAGE_KEY = 'reactFlashCards:decks'



export function intialSetUp(){
	AsyncStorage.setItem( DECK_STORAGE_KEY, JSON.stringify( decks ), () => {
		console.log('old data saved!')
	});
}


// getDecks: return all of the decks along with their titles, questions, and answers.

export async function _getDecks(){
  try {
    const value = await AsyncStorage.getItem(DECK_STORAGE_KEY);
    if (value !== null) {
      // We have data!!
      const data = JSON.parse(value)
      return data;
    }else{
    	console.log('no data')
    	return {};
    }
  } catch (error) {
  	alert(error)
    // Error retrieving data
  }
};

// getDeck: take in a single id argument and return the deck associated with that id. 


export function _getDeck( id ) {
	console.log(id);
	_getDecks().then(data => {
		return data[id]
	})
}


export async function getDeckAsync(){
	try {
        const keys = await AsyncStorage.getAllKeys()
        const items = await AsyncStorage.multiGet(keys)
        return items
    } catch (error) {
        console.log(error, "error getting data")
    }
}


// saveDeckTitle: take in a single title argument and add it to the decks. 

export async function _saveDeckTitle(title){
  try {

		AsyncStorage.mergeItem( DECK_STORAGE_KEY, JSON.stringify( { [title]:{ title:`${title}`, questions:[]} }  ), () => {
			console.log(title, 'deck saved!')
		});

	} catch (error) {
	// Error saving data
	console.log(error)
	}
};


export async function _removeDeck(title){
  try {

		AsyncStorage.mergeItem( DECK_STORAGE_KEY, JSON.stringify( { [title]:{ title:`${title}`, questions:[]} }  ), () => {
			console.log(title, 'deck saved!')
		});

	} catch (error) {
	// Error saving data
	console.log(error)
	}
};




// getDecks: return all of the decks along with their titles, questions, and answers.

// export function _getDecks () {
//   return new Promise((res, rej) => {
//     setTimeout(() => res({...decks}), 1000)
//   })
// }


// export async function _getDecks(){
//   try {
//     const value = await AsyncStorage.getItem(DECK_STORAGE_KEY);
//     if (value !== null) {
//       // We have data!!
//       const data = JSON.parse(value)
//        console.log(data, 'found data')
//       return data;
//     }else{
//     	console.log('no data')
//     	return {};
//     }
//   } catch (error) {
//   	alert(error)
//     // Error retrieving data
//   }
// };


// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 

export function _addCardToDeck( title , card ) {
	
}