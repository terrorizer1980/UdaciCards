import React, { Component } from 'react'
import {View, Text, TouchableOpacity, Platform} from 'react-native'
import FlipCard from 'react-native-flip-card'

import { connect } from 'react-redux'

import { styles } from '../utils/styles'

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

    restart = () => {
        this.setState({ index:0, viewAnswer: 0, score:0 })
        this.props.navigation.navigate('Quiz')
    }

    back = () => {
        this.props.navigation.goBack()
    }

    render() {
        const { cards } = this.props
        const { index, viewAnswer, score } = this.state
        return (
            <View style={styles.container}>
                {(cards.length > 0) ?  
                    <View>
                    {(index < cards.length) ? 
                    <View>
                        <Text style={styles.quizDeckCount}>{index+1}/{cards.length}</Text>
                        { !viewAnswer? 
                            <View style={styles.qtnView}>
                                <Text style={styles.quizQtn}>{cards[index].question}</Text>
                                <TouchableOpacity onPress={()=>this.flip()}>
                                    <Text style={styles.answer}>Answer</Text>
                                </TouchableOpacity>
                            </View>
                        :
                            <View style={styles.qtnView}>
                                <Text style={styles.quizQtn}>{cards[index].answer}</Text>
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
                        <Text style={styles.quizQtn}> 
                            You answered {Math.floor(score/cards.length*100)}% correct
                        </Text>
                        <View style={{paddingTop: 120}}>
                            <View style={{paddingTop: 10}}>
                                <RestartQuizBtn onPress={() => this.restart()}/>
                            </View>
                            <View style={{paddingTop: 10}}>
                                <BackToDeckBtn onPress={() => this.back()}/>
                            </View>
                        </View>
                    </View>
                    }
                </View>
                :
                <View style={styles.qtnView}>
                    <Text style={styles.quizQtn}> No cards added Yet.</Text>
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

function RestartQuizBtn({ onPress }) {
    return (
        <TouchableOpacity 
            style={Platform === 'ios'?styles.iosSubmitBtn:styles.AndroidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>Restart Quiz</Text>
        </TouchableOpacity>
    )
}

function BackToDeckBtn({ onPress }) {
    return (
        <TouchableOpacity 
            style={Platform === 'ios'?styles.iosSubmitBtn:styles.AndroidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>Back to Deck</Text>
        </TouchableOpacity>
    )
}

function mapStateToProps(state) {
    return {
        selectedDeck: state.selectedDeck,
        cards: state.selectedDeck.questions
    }
}

export default connect(mapStateToProps, null)(Quiz)
