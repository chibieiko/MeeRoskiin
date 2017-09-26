import React, { Component } from 'react';
import { View } from 'react-native';
import {Provider} from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/AppIcons';
import configureStore from './store/configureStore';

import {CategoryScreen} from "./modules/appscreens/CategoryScreen";

import * as colors from './res/colors.json';
import * as dimensions from './res/dimensions.json';
import * as strings from './res/strings.json';

const store = configureStore();
registerScreens(store, Provider);

const navigatorStyle = {
    statusBarColor: colors.primaryDark,
    navigationBarColor: 'black',
    navBarBackgroundColor: colors.primary,
    navBarTextColor: colors.textLight,
    navBarButtonColor: colors.textLight,
    statusBarTextColorScheme: 'light',
    navBarHidden: true,
    tabBarButtonColor: colors.primaryLight,
    tabBarSelectedButtonColor: colors.primary,
    tabBarBackgroundColor: colors.primary
};

class App extends Component {
    constructor(props) {
        super(props);
        iconsLoaded.then(() => {
            this.startApp();
        });
    }

    startApp() {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: strings.categoryTab,
                    screen: 'CategoryScreen',
                    title: strings.title,
                    icon: require('./img/ic_list_white_24px.svg'),
                    navigatorStyle
                },
                {
                    label: strings.mapTab,
                    screen: 'MapScreen',
                    title: strings.title,
                    icon: require('./img/ic_map_white_24px.svg'),
                    navigatorStyle
                }
            ],
            tabsStyle: {

            }
        });
    }
}

export default App;