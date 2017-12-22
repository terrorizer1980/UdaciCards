import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'

import { connect } from 'react-redux'

import { black, white, lightblack } from '../utils/colors'


class DeckDetails extends  Component {
    static navigationOptions = ({navigation}) => {
        const { title } = navigation.state.params
        return {
            title  
        }
    }

    render() {
        console.log(this.props.selectedDeck)
        const { selectedDeck } = this.props
        return (
            <View style={styles.deck}>
                <Text style={styles.deckTitle}>{selectedDeck.title}</Text>
                <Text style={styles.deckCount}>{selectedDeck.questions.length} cards</Text>
                <View style={{paddingTop:90}}>
                    <View style={{paddingTop: 10}}>
                        <AddCardBtn />
                    </View>
                    <View style={{paddingTop: 10}}>
                        <StartQuizBtn />
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
        selectedDeck: state.selectedDeck
    }
}

const styles = StyleSheet.create({
    deckTitle : {
        paddingTop: 25,
        borderRadius: 4,
        fontSize:35,
    },
    deckCount : {
        paddingBottom: 25,
        fontSize:25,
        color: lightblack
     },
    deck: {
        paddingTop: 95,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    iosQuizBtn: {
        backgroundColor: black,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    andriodQuizBtn: {
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
    quizBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    iosAddCardBtn: {
        backgroundColor: white,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    andriodAddCardBtn: {
        backgroundColor: white,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addCardBtnText: {
        color: black,
        fontSize: 22,
        textAlign: 'center',
    },
})

export default connect(mapStateToProps, null)(DeckDetails)
