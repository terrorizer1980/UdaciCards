import React, { Component } from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import { getDecksFromStorage, 
         clearDecks,
         clearLocalNotification, 
         setLocalNotification } from '../utils/api'

import { connect } from 'react-redux'
import { getDecksFromStore, setSelectedDeck } from '../actions'
import { styles } from '../utils/styles'

class DeckList extends Component {

    // on Mount load from local storage and add to store
    componentDidMount() {
        //clearDecks()
        getDecksFromStorage().then(decks => this.props.retreiveDecks(decks))
        // notification
        clearLocalNotification().then(setLocalNotification)
    }

    onDeckTouch = (title) => {
        const { decks, navigation, setDeck } = this.props
        // set selected deck to redux
        setDeck(decks[title])
        // redirect to deck details
        this.props.navigation.navigate('DeckDetails',{title})
    }

    renderItem = ({item}) => {
        return ( 
            <TouchableOpacity style={styles.deck} 
                onPress={() => this.onDeckTouch(item.key)}>
                <Text style={styles.deckTitle}> {item.key} </Text>
                <Text style={styles.deckCount}> {item.count} cards </Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { decks } = this.props
        var data = {}
        if(decks) {
            data = Object.keys(decks).map(key => ({
                key: decks[key].title, 
                count: decks[key].questions.length
            }))
        }
        return (
            <View style={styles.container}>
                { Object.keys(data).length>0
                ?
                <FlatList  
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                />
                :
                <Text style={styles.defaultInfo}>Create new deck using new deck tab</Text>
                }
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        decks: state.decks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        retreiveDecks: (decks) => dispatch(getDecksFromStore(decks)),
        setDeck: (deck) => dispatch(setSelectedDeck(deck))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeckList)
