import {StyleSheet, Platform} from 'react-native';

export const subjectStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    spinnerWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navWrapper: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    navBar: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    navButton: {
        flex: 2,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cfa1ff',
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 5,
            width: 0
        }
    },
    navButtonShadow: {},
    navButtonText: {
        color: '#68626f',
        fontSize: 12,
    },
    navTitle: {
        flex: 4,
        height: 28,
        borderWidth: 1,
        borderColor: '#cfa1ff',
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navTitleText: {
        fontSize: 12,
    },
    showingCurrentQuestion: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    currentQuestion: {
        color: '#cd9dff',
        fontWeight: 'bold',
    },
    otherQuestion: {
        color: '#f3e8ff',
        fontWeight: 'bold',
    },

});