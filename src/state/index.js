import chapter from './chapter/reducers';
import subject from './subject/reducers';
import home from './home/reducers';

import {combineReducers} from 'redux-immutable';

const applicationReducers = {
    home,
    chapter,
    subject,
};

function createReducer() {
    return combineReducers(applicationReducers);
}

export default createReducer;
