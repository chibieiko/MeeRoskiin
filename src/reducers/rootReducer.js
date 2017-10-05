import {combineReducers} from 'redux';
import sortingPlaceReducer from "./appscreens/sortingPlaceReducer";
import map from '../reducers/appscreens/mapScreen.reducer';
import errors from './error.reducer';

const rootReducer = combineReducers({
    map,
    errors
});

export default rootReducer;