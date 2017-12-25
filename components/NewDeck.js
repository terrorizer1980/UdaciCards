import React, { Component } from 'react'
import {View, Text, TextInput,
        TouchableOpacity, StyleSheet, Platform} from 'react-native'
import { black, white } from '../utils/colors'
import { saveDeckToStorage, clearDecks } from '../utils/api'

import { connect } from 'react-redux'
import { addDeckToStore, resetDecks, setSelectedDeck } from '../actions'

class NewDeck extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title : ''
        }
    }

    submit = () => {
        const { title }  = this.state
        const { addDeck, setDeck, navigation } = this.props
        if(title.length>0) {
            // update redux
            addDeck(title)
            // save deck title to async storage
            saveDeckToStorage(title)
            // set selected deck to redux
            setDeck({title, questions: []})
            // Navigation to deck list
            navigation.navigate('DeckDetails',{title})
            // reset title
            this.setState(() => ({title: ''}))
        }
    }

    clear = () => {
        // clear async storage 
        clearDecks()
        // update redux
        this.props.resetDecks()
        // Navigation to deck list
        this.props.navigation.navigate('DeckList')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.deckQtn}>What is the title of your new deck? </Text>
                <View style={{paddingTop: 10}}>
                    <TextInput 
                        placeholder="Deck Title"
                        style={styles.deckTitle}
                        onChangeText={(text) => this.setState({title: text})}
                        value={this.state.title}
                    />
                </View>
                <View style={{paddingTop: 10}}>
                    <SubmitBtn onPress={this.submit}/>
                </View>
                <View style={{paddingTop: 10}}>
                    <ClearBtn onPress={this.clear}/>
                </View>
            </View>
        )
    }
}

function SubmitBtn({ onPress }) {
    return (
        <TouchableOpacity 
            style={Platform === 'ios'?styles.iosSubmitBtn:styles.AndroidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>SUBMIT</Text>
        </TouchableOpacity>
    )
}

function ClearBtn({ onPress }) {
    return (
        <TouchableOpacity 
            style={Platform === 'ios'?styles.iosSubmitBtn:styles.AndroidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>CLEAR ALL DECKS</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: white
  },
  deckQtn: {
    paddingTop: 30,
    textAlign: 'center',
    fontSize: 52,
  },
  deckTitle: {
    height: 40,
    width: 300,
    borderColor: black,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  iosSubmitBtn: {
    backgroundColor: black,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: black,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
})

function mapDispatchToProps(dispatch) {
    return {
        addDeck: (title) => dispatch(addDeckToStore(title)),
        resetDecks: () => dispatch(resetDecks()),
        setDeck: (deck) => dispatch(setSelectedDeck(deck))
    }
}

export default connect(null, mapDispatchToProps)(NewDeck)
