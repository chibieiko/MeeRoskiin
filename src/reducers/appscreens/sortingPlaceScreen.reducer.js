import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.sortingPlacesInfo, action) {
    switch (action.type) {
        case types.FETCH_SORTING_PLACE_INFO:
            return {
                ...state,
                infos: [
                    ...state,
                    action.payload.info
                ],
                currentPlace: action.payload.info,
                loading: action.payload.loading
            };
            break;

        case types.UPDATE_CURRENT_PLACE:
            return {
                ...state,
                currentPlace: action.payload
            };
            break;

        default:
            return state;
            break;
    }
}
