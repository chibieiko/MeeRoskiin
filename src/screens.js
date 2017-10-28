// Register all components here

import {Navigation} from 'react-native-navigation';

import {CategoryScreen} from "./modules/appscreens/CategoryScreen";
import MapScreen from "./modules/appscreens/MapScreen";
import {CategoryInformationScreen} from "./modules/appscreens/CategoryInformationScreen";
import SortingPlaceScreen from "./modules/appscreens/SortingPlaceScreen";

import * as strings from './res/strings.json';

export function registerScreens(store, Provider) {
    Navigation.registerComponent(strings.categoryScreen, () => CategoryScreen, store, Provider);
    Navigation.registerComponent(strings.categoryInformationScreen, () => CategoryInformationScreen, store, Provider);
    Navigation.registerComponent(strings.mapScreen, () => MapScreen, store, Provider);
    Navigation.registerComponent(strings.sortingPlaceScreen, () => SortingPlaceScreen, store, Provider);
}