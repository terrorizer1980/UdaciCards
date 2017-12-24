import React, { Component } from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import { getDecksFromStorage, clearDecks} from '../utils/api'

import { connect } from 'react-redux'
import { getDecksFromStore, setSelectedDeck } from '../actions'
import { white } from '../utils/colors'

class DeckList extends Component {

    componentDidMount() {
        //clearDecks()
        console.log("DeckList componentDidMount")
        getDecksFromStorage().then(decks => this.props.retreiveDecks(decks))
        console.log(this.props.decks)
    }

    onDeckTouch = (title) => {
        const { decks, navigation, setDeck } = this.props
        // set selected deck to redux
        console.log("before set deck", decks[title])
        setDeck(decks[title])
        // redirect to deck details
        this.props.navigation.navigate('DeckDetails',{title})
    }

    renderItem = ({item}) => {
        console.log("DeckList renderItem")
        console.log(this.props.decks)
        return ( 
            <TouchableOpacity style={styles.deck} 
                onPress={() => this.onDeckTouch(item.key)}>
                <Text style={styles.deckTitle}>
                    {item.key}
                </Text>
                <Text style={styles.deckCount}>
                    {item.count} cards
                </Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { decks } = this.props
        console.log("DeckList render")
        console.log(this.props.decks)
        var data = {}
        if(decks) {
            data = Object.keys(decks).map(key => ({
                key: decks[key].title, 
                count: decks[key].questions.length
            }))
        }
        console.log('printing data', data)
        //var data = [{key: 'React'}, {key: 'JavaScript'}]
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

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: white
    },
    defaultInfo: {
        paddingTop: 30,
        textAlign: 'center',
        fontSize: 32,
    },
    deckTitle : {
        paddingTop: 25,
        borderRadius: 4,
        fontSize:25,
    },
    deckCount : {
        paddingBottom: 25,
    },
    deck: {
        justifyContent:'center',
        alignItems:'center', 
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(DeckList)
