export const ADD_DECK = 'ADD_DECK'
export const GET_DECKS = 'GET_DECKS'
export const RESET_DECKS  = 'RESET_DECKS'
export const SELECTED_DECK  = 'SELECTED_DECK'
export const ADD_CARD = 'ADD_CARD'

export function getDecksFromStore(decks) {
    return {
        type: GET_DECKS,
        decks
    }
}

export function addDeckToStore(title) {
    return {
        type: ADD_DECK,
        title
    }
}

export function setSelectedDeck(selectedDeck) {
    return {
        type: SELECTED_DECK,
        selectedDeck
    }
}

export function addCard(card) {
    return {
        type: ADD_CARD,
        card
    }
}

export function resetDecks() {
    return {
        type: RESET_DECKS
    }
}

