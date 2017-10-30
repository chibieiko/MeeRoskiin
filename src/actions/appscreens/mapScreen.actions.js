import * as xml2js from 'react-native-xml2js';

import * as types from '../../constants/actionTypes';
import * as api from '../../constants/api';
import * as strings from '../../res/strings.json';

// LOCATION
export const saveUserLocation = res => {
    return {
        type: types.SAVE_USER_LOCATION,
        payload: res
    }
};

export const addFilter = id => {
    return {
        type: types.ADD_FILTER,
        payload: id
    }
};

export const removeFilter = id => {
    return {
        type: types.REMOVE_FILTER,
        payload: id
    }
};

export const fetchSortingPlaces = (userLocation, limit = 1, typeIds = []) => (dispatch, getState) => {
    dispatch({
        type: types.FETCHING_PLACES
    });

    let url = api.KIVO_API_URL + '/genxml.php?lat=' + userLocation.lat + '&lng=' + userLocation.lng + '&limit=' + limit;

    if (typeIds.length > 0 && typeIds.length <= 3) {
        typeIds.forEach(id => {
            url = api.KIVO_API_URL + '/genxml.php?lat=' + userLocation.lat + '&lng=' + userLocation.lng + '&limit=' + 5 + '&type_id=' + id;
            fetchPlaces(url, dispatch);
        })
    } else {
        fetchPlaces(url, dispatch);
    }
};

const fetchPlaces = (url, dispatch) => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'text/xml'
        }
    })
        .then(response => response.text())
        .then(responseXML => {
            return xml2js.parseString(responseXML, (err, result) => {
                if (!err) {
                    dispatch({
                        type: types.UPDATE_SORTING_PLACES,
                        payload: result.response.markers[0].marker
                    })
                } else {
                    dispatch({
                        type: types.ADD_ERROR,
                        payload: strings.fetchSortingPlaceFailed
                    })
                }

                dispatch({
                    type: types.STOP_FETCHING_PLACES
                })
            })
        })
        .catch(error => {
            dispatch({
                type: types.ADD_ERROR,
                payload: strings.fetchSortingPlaceFailed
            });

            dispatch({
                type: types.STOP_FETCHING_PLACES
            });
            console.error(error);
        });
};