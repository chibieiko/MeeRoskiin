// Register all components here

import {Navigation} from 'react-native-navigation';

import {CategoryScreen} from "./modules/appscreens/CategoryScreen";
import MapScreen from "./modules/appscreens/MapScreen";
import {CategoryInformationScreen} from "./modules/appscreens/CategoryInformationScreen";
import SortingPlaceScreen from "./modules/appscreens/SortingPlaceScreen";
import CategoryFilterScreen from "./modules/appscreens/CategoryFilterScreen";
import SettingsScreen from "./modules/appscreens/SettingsScreen";
import InfoScreen from './modules/appscreens/InfoScreen';
import LicenseScreen from './modules/appscreens/LicenceScreen';

import * as strings from './res/strings.json';

export function registerScreens(store, Provider) {
    Navigation.registerComponent(strings.categoryScreen, () => CategoryScreen, store, Provider);
    Navigation.registerComponent(strings.categoryInformationScreen, () => CategoryInformationScreen, store, Provider);
    Navigation.registerComponent(strings.mapScreen, () => MapScreen, store, Provider);
    Navigation.registerComponent(strings.sortingPlaceScreen, () => SortingPlaceScreen, store, Provider);
    Navigation.registerComponent(strings.categoryFilterScreen, () => CategoryFilterScreen, store, Provider);
    Navigation.registerComponent(strings.settingsScreen, () => SettingsScreen, store, Provider);
    Navigation.registerComponent(strings.infoScreen, () => InfoScreen, store, Provider);
    Navigation.registerComponent(strings.licenseScreen, () => LicenseScreen, store, Provider);
}