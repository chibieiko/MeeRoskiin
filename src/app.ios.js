import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import configureStore from './store/configureStore';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as colors from './res/colors.json';
import * as strings from './res/strings.json';

const store = configureStore();
registerScreens(store, Provider);

const navigatorStyle = {
    navigationBarColor: 'black',
    navBarBackgroundColor: colors.primary,
    navBarTextColor: colors.textLight,
    navBarButtonColor: colors.textLight,
    statusBarTextColorScheme: 'light',
    navBarHidden: false
};

let listIcon;
let mapIcon;

export default class App extends Component{
    constructor(props) {
        super(props);

        this.loadIcons().then(() => {
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
                    screen: strings.categoryScreen,
                    title: strings.title,
                    icon: listIcon,
                    navigatorStyle
                },
                {
                    label: strings.mapTab,
                    screen: strings.mapScreen,
                    title: strings.title,
                    icon: mapIcon,
                    navigatorStyle
                }
            ],
            tabsStyle: {
                tabBarBackgroundColor: colors.backgroundColor,
                tabBarSelectedButtonColor: colors.primary
            }
        });
    }
}


