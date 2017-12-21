import React, { Component } from 'react'
import {View, Text, FlatList} from 'react-native'
import { getDecksFromStorage } from '../utils/api'

import { connect } from 'react-redux'
import { getDecksFromStore } from '../actions'

class DeckList extends Component {

    componentDidMount() {
        console.log("DeckList componentDidMount")
        getDecksFromStorage().then(decks => this.props.retreiveDecks(decks))
        console.log(this.props.decks)
    }

    componentWillReceiveProps() {
        console.log("DeckList componentWillReceiveProps")
    }

    renderItem = ({item}) => {
        console.log("DeckList renderItem")
        console.log(this.props.decks)
        return ( 
            <Text>{item.key}</Text>
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
            <View style={{flex: 1}}>
                { Object.keys(data).length>0
                ?
                <FlatList  
                    data={data}
                    renderItem={this.renderItem}
                />
                :
                <Text>Create new deck using new deck tab</Text>
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

export default connect(mapStateToProps,mapDispatchToProps)(DeckList)
