import { combineReducers } from 'redux'
import	{ GET_DECKS , ADD_DECK , ADD_CARD_TO_DECK,  GET_DECK } from '../actions/decks.js'


function decks (state= {}, action) {
	switch (action.type) {
		case GET_DECKS :
			return {
				...state,
				...action.decks
			}
		case GET_DECK :
			return {
				...state,
				...action.deck
			}
		case ADD_DECK :
	      const { title } = action
		      return {
		        ...state,
		        [action.title]:{
		        	title:action.title,
		        	questions:[]
		        }
		      }
		case ADD_CARD_TO_DECK : 
			const { id , card } = action.payload
		      return {
		        ...state,
		        [id]: {
		        	...state[id],
		        	questions: [ 
		        		...state[id].questions,
		        		{ answer: card.answer, question: card.question } 
		        	]
		        }
		      }
		default : 
			return state
	}
}


export default combineReducers({
	decks
})

