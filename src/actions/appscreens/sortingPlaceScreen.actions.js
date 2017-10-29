import * as xml2js from 'react-native-xml2js';

import * as types from '../../constants/actionTypes';
import * as api from '../../constants/api';
import * as strings from '../../res/strings.json';

export const fetchSortingPlaceInfo = siteId => (dispatch, getState) => {
    dispatch({
       type: types.FETCHING_INFO
    });

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
                    dispatch({
                        type: types.ADD_SORTING_PLACE_INFO,
                        payload: result.response.markers[0].marker[0].$
                    });

                    dispatch(updateCurrentPlace(result.response.markers[0].marker[0].$));
                } else {
                    dispatch({
                        type: types.ADD_ERROR,
                        payload: strings.fetchSortingPlaceInfoFailed
                    });
                    console.error(err);
                }

                dispatch({
                    type: types.STOP_FETCHING_INFO
                })
            })
        })
        .catch(error => {
            dispatch({
                type: types.ADD_ERROR,
                payload: strings.fetchSortingPlaceInfoFailed
            });
            console.error(error);

            dispatch({
                type: types.STOP_FETCHING_INFO
            })
        });
};

export const updateCurrentPlace = place => {
    return {
        type: types.UPDATE_CURRENT_PLACE,
        payload: place
    }
};