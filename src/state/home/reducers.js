import {Map, List} from 'immutable';
import {
    LOAD_CHAPTERS,
} from '../action-types';

const initialState = Map({
    error: null,
    isLoading: true,
    chapters: [],
});

const home = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CHAPTERS:
            return state
                .set('chapters', action.home.chapters)
                .set('isLoading', false)
                .set('error', null);
        default:
            return state;
    }
};

export default home;
