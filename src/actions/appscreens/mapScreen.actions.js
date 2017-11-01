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

export const updateFilters = filterArray => {
    return {
        type: types.UPDATE_FILTERS,
        payload: filterArray
    }
};

export const fetchSortingPlaces = (userLocation, limit = 3) => (dispatch, getState) => {
    dispatch({
        type: types.FETCHING_PLACES
    });

    let url = api.KIVO_API_URL + '/genxml.php?lat=' + userLocation.lat + '&lng=' + userLocation.lng + '&limit=' + limit;

    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'text/xml'
        }
    })
        .then(response => response.text())
        .then(responseXML => {
            return xml2js.parseString(responseXML, (err, result) => {
                if (!err && result.response.markers[0].marker) {
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