import {ADD_DECK, GET_DECKS, SELECTED_DECK, RESET_DECKS, ADD_CARD} from '../actions'

function decks(state = {},action) {
    const { decks, title, selectedDeck,card } = action
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
        case ADD_CARD: 
            return {
                ...state,
                selectedDeck: {title: state.selectedDeck.title, 
                            questions: [...state.selectedDeck.questions, card]},
                decks: {...state.decks, [state.selectedDeck.title]: 
                            {title: state.selectedDeck.title, 
                            questions: [...state.selectedDeck.questions, card]}
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
