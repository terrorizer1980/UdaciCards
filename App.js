import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import './utils/ReactotronConfig'
import { createStore, applyMiddleware } from 'redux'
import Reactotron from 'reactotron-react-native'
import { Provider } from 'react-redux'
//import devToolsEnhancer from 'remote-redux-devtools'
import reducer from './reducers'

import { black, lightPurple } from './utils/colors'
import { Constants } from 'expo'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import DeckDetails from './components/DeckDetails'

const store = Reactotron.createStore(
    reducer,
    applyMiddleware()
    //devToolsEnhancer(),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function CustomStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

// initial screen tabs
const Tabs = TabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'DECKS',
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'NEW DECK',
        }
    }
} , {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor:  lightPurple,
        style: {
        height: 56,
        backgroundColor: black,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
        }
    }
})

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs
    },
    DeckDetails: {
        screen: DeckDetails
    }
})

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={{flex: 1}}>
                <CustomStatusBar backgroundColor={black} barStyle="light-content" />
                <MainNavigator />
            </View>
        </Provider>
    )
  }
}
