import {
    View,
    Text,
    Image,
    Navigator,
    ScrollView,
    ListView,
    TouchableHighlight,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import {
    loadQuestions,
    setQuestion,
    selectRadioQuestion,
    selectCheckboxQuestion,
} from '../../state/subject/actions';

import ShowingCurrentQuestion from './ShowingCurrentQuestion';
import NavigationBar from './NavigationBar';

import SCTypeQuestion from '../Question/SCTypeQuestion';
import MCTypeQuestion from '../Question/MCTypeQuestion';

import IconFA from 'react-native-vector-icons/FontAwesome';
import {subjectStyles} from './styles';

const subject = require('../../jsons/subject.json');

class Subject extends Component {
    componentDidMount() {
        this.props.loadQuestions(subject);
    }

    constructor() {
        super();

        this.renderScene = this.renderScene.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.prevQuestion = this.prevQuestion.bind(this);
    }

    randomOrder(array) {
        let sortedArray = array.slice();

        return sortedArray.sort(function (a, b) {
            return 0.5 - Math.random()
        });
    };

    handleAnswerSelected(value, index) {
        console.log(value, index);
    }

    renderScene(route, navigator) {
        switch (route.type) {
            case 'single':
                return (
                    <View style={subjectStyles.content}>
                        <SCTypeQuestion
                            choices={this.props.questions[this.props.currentQuestion].answers}
                            title={this.props.questions[this.props.currentQuestion].question}
                            index={this.props.currentQuestion}
                            selectRadioQuestion={this.props.selectRadioQuestion}
                            onSelect={this.handleAnswerSelected}/>
                    </View>
                );
            case 'multiple':
                return (
                    <View style={subjectStyles.content}>
                        <MCTypeQuestion
                            choices={route.answers}
                            title={route.question}
                            index={this.props.currentQuestion}
                            selectCheckboxQuestion={this.props.selectCheckboxQuestion}
                            onSelect={this.handleAnswerSelected}/>
                    </View>
                );
        }
    }

    nextQuestion() {
        if (this.props.currentQuestion < (this.props.numberOfQuestions - 1)) {
            this.props.setQuestion(this.props.currentQuestion + 1);
            this.refs['questionsNav'].jumpForward();
        }
    }

    prevQuestion() {
        if (this.props.currentQuestion) {
            this.props.setQuestion(this.props.currentQuestion - 1);
            this.refs['questionsNav'].jumpBack();
        }
    }

    submitAnswer() {

    }

    render() {
        return (
            <View style={subjectStyles.mainContainer}>
                {(this.props.isLoading) ?
                    <View style={subjectStyles.spinnerWrap}>
                        <ActivityIndicator size="large"/>
                    </View>
                    :
                    <View style={subjectStyles.container}>
                        <ShowingCurrentQuestion currentQuestion={this.props.currentQuestion}
                                                numberOfQuestions={this.props.numberOfQuestions}/>
                        <Navigator
                            style={subjectStyles.navWrapper}
                            ref='questionsNav'
                            configureScene={(route) => Navigator.SceneConfigs.FloatFromRight}
                            initialRoute={this.props.questions[0]}
                            initialRouteStack={this.props.questions}
                            renderScene={this.renderScene.bind(this)}/>
                        <NavigationBar prevQuestion={this.prevQuestion} nextQuestion={this.nextQuestion}
                                       currentQuestion={this.props.currentQuestion}
                                       numberOfQuestions={this.props.numberOfQuestions}/>
                    </View>
                }
            </View>
        );
    }
}

Subject.propTypes = {
    navigator: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const subject = state.get('subject');
    return {
        isLoading: subject.get('isLoading'),
        title: subject.get('title'),
        questions: subject.get('questions').toJS(),
        currentQuestion: subject.get('currentQuestion'),
        numberOfQuestions: subject.get('numberOfQuestions'),
        score: subject.get('score'),
        answers: subject.get('answers'),
        completed: subject.get('completed'),
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadQuestions,
        setQuestion,
        selectRadioQuestion,
        selectCheckboxQuestion,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
