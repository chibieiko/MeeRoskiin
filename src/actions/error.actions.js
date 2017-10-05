import * as types from '../constants/actionTypes';

// LOCATION
export const removeError = index => ({
    type: types.REMOVE_ERROR,
    payload: index
});

export const addError = message => ({
    type: types.ADD_ERROR,
    payload: message
});