import * as xml2js from 'react-native-xml2js';

import * as types from '../../constants/actionTypes';
import * as api from '../../constants/api';
import * as strings from '../../res/strings.json';

// LOCATION
export const saveUserLocation = (res) => {
    return {
        type: types.SAVE_USER_LOCATION,
        payload: res
    }
};

export const fetchSortingPlaces = (userLocation, limit = 1, typeIds = []) => (dispatch, getState) => {
    let url = api.KIVO_API_URL + '?lat=' + userLocation.lat + '&lng=' + userLocation.lng + '&limit=' + limit;
    if (typeIds.length > 0) {
        typeIds.forEach(id => {
            url += '&type_id=' + id
        })
    }

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
                        type: types.FETCH_SORTING_PLACES,
                        payload: result.response.markers[0].marker
                    })
                } else {
                    dispatch({
                        type: types.ADD_ERROR,
                        payload: strings.fetchSortingPlaceFailed
                    })
                }
            })
        })
        .catch(error => {
            dispatch({
                type: types.ADD_ERROR,
                payload: strings.fetchSortingPlaceFailed
            });
            console.error(error);
        });
};