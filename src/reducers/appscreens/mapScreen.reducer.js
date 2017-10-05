import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function (state = initialState.map, action) {
    switch (action.type) {

        case types.SAVE_USER_LOCATION:
            return {
                ...state,
                userLocation: action.payload
            };

        case types.FETCH_SORTING_PLACES:
            return {
                ...state,
                sortingPlaces: action.payload
            };

        default:
            return state;
    }
}