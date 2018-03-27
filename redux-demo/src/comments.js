import {
    ADD_COMMENT
} from './actions.js';

import {
    THUMB_UP_COMMENT
} from './actions.js';

import {
    THUMB_DOWN_COMMENT
} from './actions.js';

import {
    REMOVE_COMMENT
} from './actions.js';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
                }
        , ...state];
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votes: comment.votes + 1}
                }
            return comment;
            });
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votes: comment.votes - 1}
                }
            return comment;
            });
        case REMOVE_COMMENT:
            let index;
            //eslint-disable-next-line
            state.map((comment, i) => {
                if (comment.id === action.id) {
                    index = i;
                }
            });
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        default:
            return state;
    }
}

export default comments;