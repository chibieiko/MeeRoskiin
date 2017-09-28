// Register all components here

import {Navigation} from 'react-native-navigation';

import {CategoryScreen} from "./modules/appscreens/CategoryScreen";
import {MapScreen} from "./modules/appscreens/MapScreen";
import {CategoryInformationScreen} from "./modules/appscreens/CategoryInformationScreen";

export function registerScreens(store, Provider) {
    Navigation.registerComponent('app.CategoryScreen', () => CategoryScreen, store, Provider);
    Navigation.registerComponent('app.CategoryInformationScreen', () => CategoryInformationScreen, store, Provider);
    Navigation.registerComponent('app.MapScreen', () => MapScreen, store, Provider);
}