import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Platform, Keyboard } from 'react-native'

import { connect } from 'react-redux'

import { styles } from '../utils/styles'

class DeckDetails extends  Component {
    
    componentDidMount() {
        // Hide that keyboard!
        Keyboard.dismiss()
    }
    
    static navigationOptions = ({navigation}) => {
        const { title } = navigation.state.params
        return {
            title  
        }
    }

    addCard = () => {
        this.props.navigation.navigate('AddCard')
    }

    startQuiz = () => {
        this.props.navigation.navigate('Quiz')
    }

    render() {
        const { selectedDeck } = this.props
        return (
        <View style={styles.container}>
            <View style={styles.deckDetail}>
                <Text style={styles.deckDetailTitle}>{selectedDeck.title}</Text>
                <Text style={styles.deckDetailCount}>{selectedDeck.questions.length} cards</Text>
                <View style={{paddingTop:90}}>
                    <View style={{paddingTop: 10}}>
                        <AddCardBtn onPress={() => this.addCard()}/>
                    </View>
                    <View style={{paddingTop: 10}}>
                        <StartQuizBtn onPress={() => this.startQuiz()}/>
                    </View>
                </View>
            </View>
        </View>
        )
    }
}

function AddCardBtn({ onPress }) {
    return (
        <TouchableOpacity 
            style={Platform === 'ios'?styles.iosAddCardBtn:styles.andriodAddCardBtn}
            onPress={onPress}>
            <Text style={styles.addCardBtnText}> Add Card </Text>
        </TouchableOpacity>
    )
}

function StartQuizBtn({ onPress }) {
    return (
        <TouchableOpacity 
            style={Platform === 'ios'?styles.iosQuizBtn:styles.andriodQuizBtn}
            onPress={onPress}>
            <Text style={styles.quizBtnText}>Start Quiz</Text>
        </TouchableOpacity>
    )
}

function mapStateToProps(state) {
    return {
        selectedDeck: state.selectedDeck,
    }
}

export default connect(mapStateToProps, null)(DeckDetails)
