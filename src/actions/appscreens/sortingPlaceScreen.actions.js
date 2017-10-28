import * as xml2js from 'react-native-xml2js';

import * as types from '../../constants/actionTypes';
import * as api from '../../constants/api';
import * as strings from '../../res/strings.json';

export const fetchSortingPlaceInfo = siteId => (dispatch, getState) => {
    let url = api.KIVO_API_URL + '/sitexml.php?site_id=' + siteId;

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
                    console.log("sortingPlaceInfo:", result);
                    dispatch({
                        type: types.FETCH_SORTING_PLACE_INFO,
                        payload: {
                            info: result.response.markers[0].marker[0].$,
                            loading: false
                        }
                    });
                } else {
                    dispatch({
                        type: types.ADD_ERROR,
                        payload: {
                            error: strings.fetchSortingPlaceInfoFailed,
                            loading: false
                        }
                    });
                    console.error(err);
                }
            })
        })
        .catch(error => {
            dispatch({
                type: types.ADD_ERROR,
                payload: {
                    error: strings.fetchSortingPlaceInfoFailed,
                    loading: false
                }
            });
            console.error(error);
        });
};

export const updateCurrentPlace = place => {
    return {
        type: types.UPDATE_CURRENT_PLACE,
        payload: place
    }
};

export const startLoading = res => {
    return {
        type: types.START_LOADING,
        payload: res
    }
};