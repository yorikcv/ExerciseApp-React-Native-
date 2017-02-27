import {Map, List} from 'immutable';
import {
    LOAD_SUBJECTS,
} from '../action-types';

const initialState = Map({
    error: null,
    title: '',
    isLoading: true,
    subjects: [],
});

const chapter = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SUBJECTS:
            return state
                .set('subjects', action.chapter.subjects)
                .set('title', action.chapter.title)
                .set('isLoading', false)
                .set('error', null);
        default:
            return state;
    }
};

export default chapter;
