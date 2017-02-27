import {View, Text, Image, Navigator, ScrollView, ListView, TouchableHighlight, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {CheckboxField, Checkbox} from 'react-native-checkbox-field';

import Iconz from 'react-native-vector-icons/Ionicons';
import {scTypeQuestionStyles} from './styles';

import SaveButton from './SaveButton';
import Title from './Title';

//MC - Single choice
class MCTypeQuestion extends Component {

    constructor() {
        super();

        this.renderList = this.renderList.bind(this);
    }

    selectQuestion(indexAnswer) {
        this.props.selectCheckboxQuestion(this.props.index, indexAnswer);
    }

    renderList() {
        return (
            <View style={scTypeQuestionStyles.listAnswersWrap}>
                {this.props.choices.map(function (item, index) {
                    return (
                        <View key={index} style={scTypeQuestionStyles.itemAnswerWrap}>
                            <CheckboxField
                                label={item.label}
                                onSelect={(value) => {this.selectQuestion(index)}}
                                selected={item.isSelected}
                                defaultColor="#fff"
                                selectedColor="#fff"
                                containerStyle={scTypeQuestionStyles.containerStyle}
                                labelStyle={scTypeQuestionStyles.labelStyle}
                                checkboxStyle={scTypeQuestionStyles.checkboxStyle}
                                labelSide="left">
                                <Text style={(item.isSelected)?{ color: "#debeff" }:{ color: "#fff" }}>
                                    <Iconz name="ios-close" size={60}/>
                                </Text>
                            </CheckboxField>
                        </View>
                    )
                }, this)}
            </View>
        );
    }

    render() {
        return (
            <View style={scTypeQuestionStyles.container}>
                <Title title={this.props.title} numberOfQuestion={this.props.index + 1}/>
                {this.renderList()}
                <SaveButton/>
            </View>
        );
    }
}


MCTypeQuestion.propTypes = {
    choices: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    selectCheckboxQuestion: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
};

export default MCTypeQuestion;
