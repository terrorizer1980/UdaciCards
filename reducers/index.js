import {ADD_DECK, GET_DECKS} from '../actions'

function decks(state = {},action) {
    const { decks, title } = action
    switch(action.type) {
        case ADD_DECK: 
            return {
                ...state,
                title
            }
        case GET_DECKS: 
            return {
                ...state,
                decks
            }
        default: 
            return state
    }
}

export default decks
