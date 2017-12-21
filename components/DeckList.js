import React, { Component } from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import { getDecksFromStorage} from '../utils/api'

import { connect } from 'react-redux'
import { getDecksFromStore } from '../actions'

class DeckList extends Component {

    componentDidMount() {
        console.log("DeckList componentDidMount")
        getDecksFromStorage().then(decks => this.props.retreiveDecks(decks))
        console.log(this.props.decks)
    }

    renderItem = ({item}) => {
        console.log("DeckList renderItem")
        console.log(this.props.decks)
        return ( 
            <View style={styles.deck}>
                <Text style={styles.deckTitle}>
                    {item.key}
                </Text>
            </View>
        )
    }

    render() {
        const { decks } = this.props
        console.log("DeckList render")
        console.log(this.props.decks)
        var data = {}
        if(decks) {
            data = Object.keys(decks).map(key => ({key: decks[key].title}))
        }
        console.log('printing data', data)
        //var data = [{key: 'React'}, {key: 'JavaScript'}]
        return (
            <View>
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
        retreiveDecks: (decks) => dispatch(getDecksFromStore(decks))
    }
}

const styles = StyleSheet.create({
    defaultInfo: {
        paddingTop: 30,
        textAlign: 'center',
        fontSize: 32,
    },
    deckTitle : {
        paddingTop: 25,
        paddingBottom: 25,
        borderRadius: 4,
        fontSize:25,
    },
    deck: {
        justifyContent:'center',
        alignItems:'center', 
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(DeckList)
