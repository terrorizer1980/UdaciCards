import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const DECK_STORAGE_KEY = 'UdaciCards:Decks'
export const NOTIFICATION_KEY = 'UdaciCards:notifications'


export const saveDeckToStorage = (title) => {
    var data = {
        [title] : {
            title,
            questions: []
        }
    }
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(data))
}

export const getDecksFromStorage = () => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
            .then(results => (results===null)?{}:JSON.parse(results))
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
            return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(data))
        } 
    )
}

export const clearDecks = () => AsyncStorage.clear()

export const createNotification = () => ({
    title: 'Take your quiz!',
    body: "👋 don't forget to take quiz for today!",
    ios: {
        sound: true
    },
    andriod: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true
    }
})


export const  clearLocalNotification = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
            .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data => {
        if(data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
                .then(({ status }) => {
                    console.log("Permissions status",status)
                    if(status === 'granted'){
                        Notifications.cancelAllScheduledNotificationsAsync()

                        let tomorrow = new Date()
                        tomorrow.setDate(tomorrow.getDate() + 1)
                        tomorrow.setHours(20)
                        tomorrow.setMinutes(0)

                        Notifications.scheduleLocalNotificationAsync(
                            createNotification(),
                            {
                                time: tomorrow,
                                repeat: 'day'
                            }
                        )
                        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                    }
                })
                .catch(error => console.log("Error during permissions", error))
        }
    }))
}
