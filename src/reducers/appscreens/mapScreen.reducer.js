import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export const userLocation = (state = initialState.map.userLocation, action) =>
    (action.type === types.SAVE_USER_LOCATION) ?
        action.payload :
        state;

export const sortingPlaces = (state = initialState.map.sortingPlaces, action) =>
    (action.type === types.UPDATE_SORTING_PLACES) ?
        action.payload :
        state;

export const selectedFilters = (state = initialState.map.selectedFilters, action) => {
    switch(action.type) {
        case types.ADD_FILTER:
            return [
                ...state,
                action.payload
            ];

        case types.REMOVE_FILTER:
            return state.filter(id => id !== action.payload);

        default:
            return state;
    }
};


export const fetchingPlaces = (state = initialState.map.fetchingPlaces, action) => {
    switch(action.type) {
        case types.FETCHING_PLACES:
            return true;

        case types.STOP_FETCHING_PLACES:
            return false;

        default:
            return state;
    }
};