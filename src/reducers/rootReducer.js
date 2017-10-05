import {combineReducers} from 'redux';
import sortingPlaceReducer from "./appscreens/sortingPlaceReducer";
import map from '../reducers/appscreens/mapScreen.reducer';

const rootReducer = combineReducers({
    map
});

export default rootReducer;