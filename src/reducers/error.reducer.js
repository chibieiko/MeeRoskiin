import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function (state = initialState.errors, action) {
    switch (action.type) {

        case types.ADD_ERROR:
            return [
                ...state,
                action.payload
            ];

        case types.REMOVE_ERROR:
            state.splice(action.payload, 1);
            return state;

        default:
            return state;
    }
}