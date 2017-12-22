import {ADD_DECK, GET_DECKS, SELECTED_DECK, RESET_DECKS} from '../actions'

function decks(state = {},action) {
    const { decks, title, selectedDeck } = action
    switch(action.type) {
        case ADD_DECK: 
            return {
                decks: {
                    ...state.decks,
                    [title] : {
                        title,
                        questions: []
                    }
                }
            }
        case GET_DECKS: 
            return {
                ...state.decks,
                decks
            }
        case RESET_DECKS: 
            return {
                decks: {
                }
            }
        case SELECTED_DECK: 
            return {
                ...state,
                selectedDeck
            }
        default: 
            return state
    }
}

export default decks
