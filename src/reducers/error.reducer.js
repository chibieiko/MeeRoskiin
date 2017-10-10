import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function (state = initialState.errors, action) {
    switch (action.type) {

        case types.ADD_ERROR:
            return {
                ...state,
                errors: [
                    ...state,
                    action.payload.error
                ],
                loading: action.payload.loading
            };

        case types.REMOVE_ERROR:
            return state.filter((message, i) => i !== action.payload);

        default:
            return state;
    }
}