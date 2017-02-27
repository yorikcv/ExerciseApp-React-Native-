import {StyleSheet, Platform} from 'react-native';

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        zIndex: 2,
        marginTop: 56,
    },
    navBar: {
        height: 56,
        backgroundColor: '#ffffff',
    },
    navBarIcons: {
        marginTop: 19,
        marginRight: 13,
        marginLeft: 13,
        marginBottom: 7,
        fontSize: 30,
        color: '#bbb',
    },
    navBarTitleContainer: {
        zIndex: 10,
        alignSelf: 'stretch',
        marginRight: 65,
    },
    navBarTitle: {
        textAlign: 'right',
        marginTop: 24,
        marginBottom: 13,
        color: '#000',
        fontWeight: 'bold',
    },  
    navigationMenuItem: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ededed',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    label: {
        fontSize: 24,
        marginLeft: 10,
    },
});

export const commonStyles = StyleSheet.create({
    spinnerWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
