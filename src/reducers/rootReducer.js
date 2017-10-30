import {combineReducers} from 'redux';
import {userLocation, sortingPlaces, selectedFilters, fetchingPlaces} from './appscreens/mapScreen.reducer';
import {errors} from './error.reducer';
import {currentPlace, infos, fetchingInfo} from './appscreens/sortingPlaceScreen.reducer';

const rootReducer = combineReducers({
    map: combineReducers({
        userLocation,
        sortingPlaces,
        selectedFilters,
        fetchingPlaces
    }),
    sortingPlacesInfo: combineReducers({
        currentPlace,
        infos,
        fetchingInfo
    }),
    errors
});

export default rootReducer;