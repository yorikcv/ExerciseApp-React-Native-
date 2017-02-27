import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { LOAD_QUESTIONS_REQUEST, LOAD_QUESTIONS_ERROR, LOAD_QUESTIONS_SUCCESS } from '../state/action-types';


function* runLoadQuestions() {
    try {
        const response = yield call(loadAllQuestions);
        yield put({
            type: LOAD_QUESTIONS_SUCCESS,
            payload: {
                questions: response,
            },
        });
    } catch (error) {
        yield put({
            type: LOAD_QUESTIONS_ERROR,
            payload: {
                error,
            },
        });
    }
}

export function* loadQuestions() {
    yield* takeEvery(LOAD_QUESTIONS_REQUEST, runLoadQuestions);
}
