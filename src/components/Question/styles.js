import {StyleSheet, Platform} from 'react-native';

export const scTypeQuestionStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        paddingBottom: 5,
        flexDirection: 'row',
    },
    titleWrap: {
        flex: 5,
        marginRight: 5,
    },
    titleText: {
        color: '#000',
        fontSize: 21,
        fontWeight: 'bold',
    },
    numberOfQuestionWrap: {
        flex: 1,
        alignItems: 'center',
    },
    numberOfQuestion: {
        marginTop: 5,
        height: 40,
        width: 40,
        borderColor: '#debeff',
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberOfQuestionText: {
        color: '#cc9bff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    listAnswersWrap: {
        flex: 1,
    },
    itemAnswerWrap: {
        flex: 1,
        justifyContent: 'center',
        borderTopColor: '#f8f8f8',
        borderTopWidth: 2,
    },
    saveButtonWrap: {
        paddingBottom: 5,
        paddingTop: 10,
    },
    itemAnswerLabelWrap: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    itemAnswerLabel: {
        fontSize: 16,
        color: '#000',
    },
    itemAnswerInputWrap: {
        marginLeft: 20,
        marginRight: 15,
    },
    saveButton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cfa1ff',
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 5,
            width: 0
        },
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 21,
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    checkboxStyle: {
        width: 26,
        height: 26,
        marginLeft: 20,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#debeff',
    }

});