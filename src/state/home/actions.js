import {
    LOAD_CHAPTERS,
} from '../action-types';

export const loadChapters = (home) => ({
    type: LOAD_CHAPTERS,
    home
});