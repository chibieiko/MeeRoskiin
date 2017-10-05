import * as types from '../../constants/actionTypes';

// LOCATION
export function saveUserLocation(res) {
    return {
        type: types.SAVE_USER_LOCATION,
        payload: res
    }
}