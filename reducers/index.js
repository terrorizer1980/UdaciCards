import {ADD_DECK, GET_DECKS, RESET_DECKS} from '../actions'

function decks(state = {},action) {
    const { decks, title } = action
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
        default: 
            return state
    }
}

export default decks
