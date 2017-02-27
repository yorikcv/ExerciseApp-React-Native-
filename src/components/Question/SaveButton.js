import {View, Text, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

import {scTypeQuestionStyles} from './styles';

class SaveButton extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={scTypeQuestionStyles.saveButtonWrap}>
                <TouchableOpacity activeOpacity={0.5} style={scTypeQuestionStyles.saveButton}>
                    <Text style={scTypeQuestionStyles.saveButtonText}>בדוק</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
;

export default SaveButton;
