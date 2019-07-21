import { combineReducers } from 'redux'
import	{ GET_DECKS , ADD_DECK , ADD_CARD_TO_DECK } from '../actions/decks.js'


function decks (state= {}, action) {
	switch (action.type) {
		case GET_DECKS :
			return {
				...state,
				...action.decks
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
		        	questions:[card]
		        }
		      }
		default : 
			return state
	}
}


export default combineReducers({
	decks
})
