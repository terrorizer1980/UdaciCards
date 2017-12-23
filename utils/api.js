import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'UdaciCards:Decks'

export const saveDeckToStorage = (title) => {
    console.log("Saving Deck title", title)
    var data = {
        [title] : {
            title,
            questions: []
        }
    }
    console.log("Before Async storage", JSON.stringify(data))
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(data))
}

export const getDecksFromStorage = () => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
            .then(results => (results===null)?{}:JSON.parse(results))
}

export const  getDeckFromStorage = (id) => {
}

export const addCardToDeckInStorage = (title,card) => {
    getDecksFromStorage().then(
        decks => {
            var data = {
                [title] : {
                    title,
                    questions: [...decks[title].questions, card]
                }
            }
            console.log("At add card to deck in storage", data)
            return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(data))
        } 
    )
}

export const clearDecks = () => AsyncStorage.clear()

