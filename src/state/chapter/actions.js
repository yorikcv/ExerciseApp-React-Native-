import {
    LOAD_SUBJECTS,
} from '../action-types';

export const loadSubjects = (chapter) => ({
    type: LOAD_SUBJECTS,
    chapter
});