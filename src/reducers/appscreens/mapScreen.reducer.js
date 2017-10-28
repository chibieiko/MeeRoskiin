import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export const userLocation = (state = initialState.map.userLocation, action) =>
    (action.type === types.SAVE_USER_LOCATION) ?
        action.payload :
        state;

export const sortingPlaces = (state = initialState.map.sortingPlaces, action) =>
    (action.type === types.FETCH_SORTING_PLACES) ?
        action.payload :
        state;

export const selectedCategories = (state = initialState.map.selectedCategories, action) =>
    (action.type === types.UPDATE_SELECTED_CATEGORIES) ?
        action.payload :
        state;

export const fetchingPlaces = (state = false, action) => {
    switch(action.type) {
        case types.START_FETCHING:
            return true;

        case types.STOP_FETCHING:
            return false;

        default:
            return state;
    }
};