// Register all components here

import {Navigation} from 'react-native-navigation';

import {CategoryScreen} from "./modules/appscreens/CategoryScreen";
import {MapScreen} from "./modules/appscreens/MapScreen";

export function registerScreens(store, Provider) {
    Navigation.registerComponent('app.CategoryScreen', () => CategoryScreen, store, Provider);
    Navigation.registerComponent('app.MapScreen', () => MapScreen, store, Provider);
}