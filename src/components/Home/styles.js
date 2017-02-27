import {StyleSheet, Platform} from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdfd',
    },
});

export const accountStyles = StyleSheet.create({
    account: {
        flexDirection: 'row-reverse',
        padding: 12,
        backgroundColor: '#974ae8',
    },
    profilePictureWrapper: {
        width: 45,
        height: 45,
        marginRight: 8,
    },
    profilePicture: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    profileNameWrapper: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 75,
        left: 75,
        top: 0,
        bottom: 0,
    },
    profileName: {
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 2,
        fontSize: 15,
    },
    arrowDownWrapper: {
        position: 'absolute',
        alignItems: 'center',
        right: 0,
        left: 0,
        bottom: 0,
    },
    arrowDown: {
        width: 0,
        height: 0,
        borderLeftWidth: 15,
        borderLeftColor: 'transparent',
        borderRightWidth: 15,
        borderRightColor: 'transparent',
        borderBottomWidth: 15,
        borderBottomColor: '#ba77ff',
    },
    message: {
        backgroundColor: '#ba77ff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
    },
    messageText: {
        marginLeft: 75,
        marginRight: 75,
        color: '#676f5f',
    },
    closeMessageWrapper: {
        position: 'absolute',
        right: 20,
        width: 45,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeMessage: {
        fontSize: 22,
        color: '#676f5f',
    },

});

export const subjectsStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginTop: 15,
        marginBottom: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontWeight: '900',
        color: '#000'
    },
    itemsWrapper: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    itemWrapper: {
        width: 110,
        height: 90,
        alignItems: 'center',
        marginBottom: 15,
    },
    itemImg: {
        height: 75,
        width: 65,
    },
    itemText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#aaa'
    }
    
});