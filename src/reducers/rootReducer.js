import {combineReducers} from 'redux';
import sortingPlaceReducer from "./appscreens/sortingPlaceReducer";

const rootReducer = combineReducers({
    sortingPlaces: sortingPlaceReducer
});

export default rootReducer;