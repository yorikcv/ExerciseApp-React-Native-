import {View, Text, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

import {scTypeQuestionStyles} from './styles';

class Title extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={scTypeQuestionStyles.title}>
                <View style={scTypeQuestionStyles.titleWrap}>
                    <Text style={scTypeQuestionStyles.titleText}>{this.props.title}</Text>
                </View>
                <View style={scTypeQuestionStyles.numberOfQuestionWrap}>
                    <View style={scTypeQuestionStyles.numberOfQuestion}>
                        <Text style={scTypeQuestionStyles.numberOfQuestionText}>{this.props.numberOfQuestion}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
;

export default Title;
