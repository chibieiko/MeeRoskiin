import {combineReducers} from 'redux';
import map from './appscreens/mapScreen.reducer';
import errors from './error.reducer';
import sortingPlacesInfo from './appscreens/sortingPlaceScreen.reducer';

const rootReducer = combineReducers({
    map,
    sortingPlacesInfo,
    errors
});

export default rootReducer;