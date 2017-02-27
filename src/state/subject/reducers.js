import {List, fromJS} from 'immutable';
import {
    LOAD_QUESTIONS,
    SET_CURRENT_QUESTION,
    SELECT_RADIO_QUESTION,
    SELECT_CHECKBOX_QUESTION,
} from '../action-types';

const initialState = fromJS({
    error: null,
    title: 'Hello',
    isLoading: true,
    questions: [],
    currentQuestion: 0,
    correctAnswers: 0,
    numberOfQuestions: 0,
    score: 0,
    answers: [],
    completed: false
});

const selectRadioQuestion = (state, indexQuestion, indexAnswer) =>
    state.updateIn(['questions'], questions => {
        if (indexQuestion !== -1) {
            let question = questions.toJS()[indexQuestion];
            question.answers.map((answer) => answer.isSelected = false);
            question.answers[indexAnswer].isSelected = !question.answers[indexAnswer].isSelected;
            return questions.update(indexQuestion, () => question);
        }
        return questions;
    });

const selectCheckboxQuestion = (state, indexQuestion, indexAnswer) =>
    state.updateIn(['questions'], questions => {
        if (indexQuestion !== -1) {
            let question = questions.toJS()[indexQuestion];
            question.answers[indexAnswer].isSelected = !question.answers[indexAnswer].isSelected;
            return questions.update(indexQuestion, () => question);
        }
        return questions;
    });


const subject = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_QUESTIONS:
            return state
                .set('questions', fromJS(action.subject.questions))
                .set('numberOfQuestions', action.subject.questions.length)
                .set('title', action.subject.title)
                .set('isLoading', false)
                .set('error', null);
        case SET_CURRENT_QUESTION:
            return state
                .set('currentQuestion', action.currentQuestion)
                .set('error', null);
        case SELECT_RADIO_QUESTION:
            return selectRadioQuestion(state, action.indexQuestion, action.indexAnswer);
        case SELECT_CHECKBOX_QUESTION:
            return selectCheckboxQuestion(state, action.indexQuestion, action.indexAnswer);

        default:
            return state;
    }
};

export default subject;
