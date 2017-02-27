import {View, Text} from 'react-native';
import React, {Component} from 'react';

import {subjectStyles} from './styles';

class ShowingCurrentQuestion extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={subjectStyles.showingCurrentQuestion}>
                {[...Array(this.props.numberOfQuestions)].map((x, i) =>
                    <Text style={(this.props.currentQuestion === i) ? subjectStyles.currentQuestion : subjectStyles.otherQuestion}
                          key={i}>{i + 1}</Text>
                )}
            </View>
        )
    }
}
;

export default ShowingCurrentQuestion;
