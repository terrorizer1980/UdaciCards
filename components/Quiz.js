import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import FlipCard from 'react-native-flip-card'

import { connect } from 'react-redux'

import { red, white, black, green } from '../utils/colors'

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            viewAnswer: false,
            score: 0
        }
    }

    correct = () => {
        this.setState((state) => ({
            index: state.index+1,
            viewAnswer: state.viewAnswer,
            score: state.score+1
        }))
    }

    incorrect = () => {
        this.setState((state) => ({
            index: state.index+1,
            viewAnswer: state.viewAnswer
        }))
    }

    flip = () => {
        this.setState((state) => ({
            ...state,
            viewAnswer: !state.viewAnswer
        }))
    }

    render() {
        console.log("In Quiz screen",this.props.cards)
        const { cards } = this.props
        const { index, viewAnswer } = this.state
        return (
            <View style={styles.container}>
                {(cards.length > 0) ?  
                    <View>
                    {(index < cards.length) ? 
                    <View>
                        <Text style={styles.deckCount}>{index+1}/{cards.length}</Text>
                        { !viewAnswer? 
                            <View style={styles.qtnView}>
                                <Text style={styles.deckQtn}>{cards[index].question}</Text>
                                <TouchableOpacity onPress={()=>this.flip()}>
                                    <Text style={styles.answer}>Answer</Text>
                                </TouchableOpacity>
                            </View>
                        :
                            <View style={styles.qtnView}>
                                <Text style={styles.deckQtn}>{cards[index].answer}</Text>
                                <TouchableOpacity onPress={()=>this.flip()}>
                                    <Text style={styles.answer}>Question</Text>
                                </TouchableOpacity>
                            </View>
                        } 
                        <View style={{paddingTop: 120}}>
                            <View style={{paddingTop: 10}}>
                                <CorrectBtn onPress={() => this.correct()}/>
                            </View>
                            <View style={{paddingTop: 10}}>
                                <IncorrectBtn onPress={() => this.incorrect()}/>
                            </View>
                        </View>
                    </View>
                    :
                    <View style={styles.qtnView}>
                        <Text style={styles.deckQtn}> Your score is : {this.state.score} </Text>
                    </View>
                    }
                </View>
                :
                <View style={styles.qtnView}>
                    <Text style={styles.deckQtn}> No cards added Yet.</Text>
                </View>
                }
            </View>
        )
    }
}

function CorrectBtn({ onPress }) {
    return (
        <TouchableOpacity 
            style={Platform === 'ios'?styles.iosCorrectBtn:styles.andriodCorrectBtn}
            onPress={onPress}>
            <Text style={styles.correctBtnText}> Correct </Text>
        </TouchableOpacity>
    )
}

function IncorrectBtn({ onPress }) {
    return (
        <TouchableOpacity 
            style={Platform === 'ios'?styles.iosIncorrectBtn:styles.andriodIncorrectBtn}
            onPress={onPress}>
            <Text style={styles.incorrectBtnText}>Incorrect</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: white
    },
    qtnView : {
        paddingTop: 125,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    deckQtn : {
        fontSize: 35,
        borderRadius: 4,
        textAlign: 'center', 
        fontWeight: '600',
    },
    deckCount : {
        fontSize:25,
        color: black
     },
    answer : {
        color: red,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    iosCorrectBtn: {
        backgroundColor: green,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    andriodCorrectBtn: {
        backgroundColor: green,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    correctBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    iosIncorrectBtn: {
        backgroundColor: red,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    andriodIncorrectBtn: {
        backgroundColor: red,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    incorrectBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
})

function mapStateToProps(state) {
    return {
        selectedDeck: state.selectedDeck,
        cards: state.selectedDeck.questions
    }
}

export default connect(mapStateToProps, null)(Quiz)
