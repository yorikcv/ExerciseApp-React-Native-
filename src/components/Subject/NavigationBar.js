import {View, Text, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

import {subjectStyles} from './styles';

class NavigationBar extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={subjectStyles.navBar}>
                <TouchableOpacity activeOpacity={0.5} style={subjectStyles.navButton}
                                  onPress={() => this.props.prevQuestion()} disabled={!this.props.currentQuestion}>
                    <Text style={subjectStyles.navButtonText}>שאלה קודמת</Text>
                </TouchableOpacity>
                <View style={subjectStyles.navTitle}>
                    <Text style={subjectStyles.navTitleText}>1/3 נסיונות</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={subjectStyles.navButton}
                                  onPress={() => this.props.nextQuestion()}
                                  disabled={this.props.currentQuestion === (this.props.numberOfQuestions - 1)}>
                    <Text style={subjectStyles.navButtonText}>שאלה הבאה</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
;

export default NavigationBar;
