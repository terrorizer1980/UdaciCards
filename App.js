import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { purple } from './utils/colors'
import { Constants } from 'expo'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

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
})

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <CustomStatusBar backgroundColor={purple} barStyle="light-content" />
          <Tabs />
        </View>
    )
  }
}
