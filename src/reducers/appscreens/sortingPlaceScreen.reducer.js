import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export const currentPlace = (state = initialState.sortingPlacesInfo.currentPlace, action) =>
    (action.type === types.UPDATE_CURRENT_PLACE) ?
        action.payload :
        state;

export const infos = (state = initialState.sortingPlacesInfo.infos, action) => {
    if (action.type === types.FETCH_SORTING_PLACE_INFO) {
        return [
            ...state,
            action.payload
        ]
    } else {
        return state;
    }
};

export const fetchingInfo = (state = false, action) => {
    switch(action.type) {
        case types.START_FETCHING:
            return true;

        case types.STOP_FETCHING:
            return false;

        default:
            return state;
    }
};