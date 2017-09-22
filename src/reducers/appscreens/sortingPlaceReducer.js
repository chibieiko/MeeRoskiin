import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export default function (state = [], action) {
    switch (action.type) {
        case types.FETCH_SORTING_PLACES:
            return {
                ...state
            };

        default:
            return state;
    }
}
