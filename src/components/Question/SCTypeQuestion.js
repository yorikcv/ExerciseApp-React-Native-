import {View, Text, Image, Navigator, ScrollView, ListView, TouchableHighlight, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import {scTypeQuestionStyles} from './styles';

import SaveButton from './SaveButton';
import Title from './Title';

//SC - Single choice
class SCTypeQuestion extends Component {

    constructor() {
        super();

        this.renderList = this.renderList.bind(this);
        this.selectQuestion = this.selectQuestion.bind(this);
    }

    selectQuestion(indexAnswer) {
        this.props.selectRadioQuestion(this.props.index, indexAnswer);
    }

    renderList() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        return (
            <RadioForm
                animation={true}
                style={scTypeQuestionStyles.listAnswersWrap}>
                {this.props.choices.map(function (item, index) {
                    return (
                        <View key={index} style={scTypeQuestionStyles.itemAnswerWrap}>
                            <RadioButton labelHorizontal={true}>
                                <RadioButtonLabel
                                    obj={item}
                                    index={index}
                                    labelHorizontal={true}
                                    onPress={(value, index) => {this.selectQuestion(index)}}
                                    labelStyle={scTypeQuestionStyles.itemAnswerLabel}
                                    labelWrapStyle={scTypeQuestionStyles.itemAnswerLabelWrap}
                                />
                                <RadioButtonInput
                                    obj={item}
                                    index={index}
                                    isSelected={item.isSelected}
                                    onPress={(value, index) => {this.selectQuestion(index)}}
                                    buttonSize={25}
                                    buttonOuterSize={25}
                                    borderWidth={2}
                                    buttonInnerColor={'#debeff'}
                                    buttonOuterColor={'#debeff'}
                                    buttonStyle={{}}
                                    buttonWrapStyle={scTypeQuestionStyles.itemAnswerInputWrap}
                                />
                            </RadioButton>
                        </View>
                    )
                }, this)}
            </RadioForm>
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

SCTypeQuestion.propTypes = {
    choices: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    selectRadioQuestion: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
};


export default SCTypeQuestion;
