import React, { Component } from 'react'
import {View, Text, TextInput,
        TouchableOpacity, StyleSheet, Platform} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { black, white } from '../utils/colors'

import { connect } from 'react-redux'

import { addCard } from '../actions'
import { addCardToDeckInStorage } from '../utils/api'

class AddCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            question : '',
            answer: ''
        }
    }

    submit = () => {
        const { saveCard, decks, selectedDeck, navigation} = this.props
        const card = {
            question: this.state.question,
            answer: this.state.answer
        }
        // update redux
        saveCard(card)
        // save to storage
        addCardToDeckInStorage(selectedDeck.title,card)
        // navigate to add card screen
        navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{paddingTop: 20}}>
                    <TextInput 
                        placeholder="Enter Question"
                        style={styles.title}
                        onChangeText={text => this.setState({...this.state,question: text})}
                        value={this.state.question}
                    />
                </View>
                <View style={{paddingTop: 20}}>
                    <TextInput 
                        placeholder="Enter Answer"
                        style={styles.title}
                        onChangeText={text => this.setState({...this.state,answer: text})}
                        value={this.state.answer}
                    />
                </View>
                <View style={{paddingTop: 30}}>
                    <SubmitBtn onPress={this.submit}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  deckQtn: {
    paddingTop: 30,
    textAlign: 'center',
    fontSize: 52,
  },
  title: {
    height: 40,
    width: 400,
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

function mapStateToProps(state) {
    return {
        selectedDeck: state.selectedDeck,
        decks: state.decks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveCard : (card) => dispatch(addCard(card))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
