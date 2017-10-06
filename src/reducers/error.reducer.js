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
            return state.filter((message, i) => i !== action.payload);

        default:
            return state;
    }
}