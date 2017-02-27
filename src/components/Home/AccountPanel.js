import {View, Text, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';

import TouchableOpacity from 'TouchableOpacity';
import {accountStyles} from './styles';

import Iconz from 'react-native-vector-icons/Ionicons';

const AccountPanel = (props) => {
    return (
        <View>
            <View style={accountStyles.account}>
                <View style={accountStyles.profilePictureWrapper}>
                    <Image style={accountStyles.profilePicture}
                           source={{uri: props.userImgUrl}}/>
                </View>
                <View style={accountStyles.profileNameWrapper}>
                    <Text style={accountStyles.profileName}>{props.userName}</Text>
                </View>
                {
                    (props.messageText) ?
                        <View style={accountStyles.arrowDownWrapper}>
                            <View style={accountStyles.arrowDown}/>
                        </View>
                        : <View/>
                }

            </View>
            {
                (props.messageText) ?
                    <View style={accountStyles.message}>
                        <Text style={accountStyles.messageText}>{props.messageText}</Text>
                        <View style={accountStyles.closeMessageWrapper}>
                            <TouchableOpacity>
                                <Iconz name="md-close" style={accountStyles.closeMessage}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View/>
            }

        </View>
    )
};

export default AccountPanel;
