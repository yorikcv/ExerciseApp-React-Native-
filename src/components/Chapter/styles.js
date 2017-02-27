import {StyleSheet, Platform} from 'react-native';

export const chapterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdfd',
    },
    spinnerWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemsWrapper: {
    },
    itemWrapper: {
        height: 138,
        borderBottomColor: '#f0f0f1',
        borderBottomWidth: 2,
        backgroundColor: '#f8f8f9',
    },
    item: {
        flex: 1,
        flexDirection: 'row-reverse',
        paddingLeft: 5,
        paddingRight: 10,
    },
    imgWrapper: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberOfQuestionWrapper: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberOfQuestion: {
        color: '#cfa2ff',
    },
    scoreWrapper: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    score: {
        color: '#9346e7',
    },
    nameWrapper: {
        flex: 6,
        justifyContent: 'center',
    },
    itemText: {
        color: '#000',
        fontWeight: 'bold',
    },
    itemImg: {
        height: 50,
        width: 50,
    },
    itemIcon: {
        fontSize: 45,
        color: '#a89d95',
    },

});