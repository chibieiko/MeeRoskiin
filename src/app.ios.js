import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import configureStore from './store/configureStore';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as colors from './res/colors.json';
import * as strings from './res/strings.json';

const list = require('./img/ic_list_white_24px.svg');
const map = require('./img/ic_map_white_24px.svg');

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

let listIcon;
let mapIcon;

export default class App extends Component{
    constructor(props) {
        super(props);

        this.loadIcons().then(() => {
            console.log('icons loaded');
            this.startApp();
        }).catch(error => {
            console.error(error);
        });
    }

    loadIcons = function () {
        return new Promise((resolve, reject) => {
            Promise.all(
                [
                    Ionicons.getImageSource('ios-list', 30),
                    Ionicons.getImageSource('ios-map', 30)
                ]
            ).then(values => {
                listIcon = values[0];
                mapIcon = values[1];
                resolve(true);
            }).catch(error => {
                console.error(error);
                reject(error);
            }).done();
        });
    };

    startApp = () => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: strings.categoryTab,
                    screen: 'app.CategoryScreen',
                    title: strings.title,
                    icon: listIcon,
                    navigatorStyle
                },
                {
                    label: strings.mapTab,
                    screen: 'app.MapScreen',
                    title: strings.title,
                    icon: mapIcon,
                    navigatorStyle
                }
            ],
            tabsStyle: {
                tabBarBackgroundColor: colors.primary,
                tabBarButtonColor: colors.textSecondary,
                tabBarSelectedButtonColor: colors.textLight
            }
        });
    }
}


