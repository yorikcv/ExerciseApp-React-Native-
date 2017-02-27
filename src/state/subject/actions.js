import {
    LOAD_QUESTIONS,
    SET_CURRENT_QUESTION,
    SELECT_RADIO_QUESTION,
    SELECT_CHECKBOX_QUESTION,
} from '../action-types';

export const loadQuestions = (subject) => ({
    type: LOAD_QUESTIONS,
    subject
});

export const setQuestion = (currentQuestion) => ({
    type: SET_CURRENT_QUESTION,
    currentQuestion
});

export const selectRadioQuestion = (indexQuestion, indexAnswer) => ({
    type: SELECT_RADIO_QUESTION,
    indexQuestion,
    indexAnswer
});

export const selectCheckboxQuestion = (indexQuestion, indexAnswer) => ({
    type: SELECT_CHECKBOX_QUESTION,
    indexQuestion,
    indexAnswer
});
