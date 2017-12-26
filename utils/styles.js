import { StyleSheet } from 'react-native'
import { black, white, lightblack, red, green } from './colors'

export const styles = StyleSheet.create({
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
    },
    deckQtn: {
        paddingTop: 30,
        textAlign: 'center',
        fontSize: 52,
    },
    title: {
        alignSelf: 'stretch',
        height: 40,
        borderColor: black,
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
    deckDetailTitle : {
        paddingTop: 25,
        borderRadius: 4,
        fontSize:35,
    },
    deckDetailCount : {
        paddingBottom: 25,
        fontSize:25,
        color: lightblack
     },
    deckDetail: {
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
        padding: 10,
        borderRadius: 7,
        height: 45,
        borderRadius: 2,
        borderColor: black,
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40,
        marginRight: 40,
    },
    andriodAddCardBtn: {
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        borderColor: black,
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addCardBtnText: {
        color: black,
        fontSize: 22,
        textAlign: 'center',
    },
    deckQtn: {
        paddingTop: 30,
        textAlign: 'center',
        fontSize: 52,
    },
    newDeckTitle: {
        height: 40,
        width: 300,
        borderColor: black,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
    qtnView : {
        paddingTop: 125,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    quizQtn : {
        fontSize: 35,
        borderRadius: 4,
        textAlign: 'center', 
        fontWeight: '600',
    },
    quizDeckCount : {
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
