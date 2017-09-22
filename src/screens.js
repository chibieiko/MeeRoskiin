// Register all components here

import {Navigation} from 'react-native-navigation';

import {CategoryScreen} from "./modules/appscreens/CategoryScreen";

export function registerScreens(store, Provider) {
    Navigation.registerComponent('app.CategoryScreen', () => CategoryScreen, store, Provider);
}