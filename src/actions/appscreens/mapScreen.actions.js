import * as xml2js from 'react-native-xml2js';

import * as types from '../../constants/actionTypes';
import * as api from '../../constants/api';

// LOCATION
export const saveUserLocation = (res) => {
    return {
        type: types.SAVE_USER_LOCATION,
        payload: res
    }
};

export const fetchSortingPlaces = (userLocation, limit = 1, typeIds = []) => (dispatch, getState) => {

    console.log('kivo url: ', api.KIVO_API_URL);
    let url = 'http://kierratys.info/2.0/genxml.php?lat=' + userLocation.lat + '&lng=' + userLocation.lng + '&limit=' + limit;
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
                }
            })
        })
        .catch(error => {
            // todo handle error
            console.error(error);
        });
};