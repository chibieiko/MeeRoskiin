import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
    statusBarColor: 'black',
    statusBarTextColorScheme: 'light',
    navigationBarColor: 'black',
    navBarBackgroundColor: '#0a0a0a',
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    navBarHiddenOnScroll: true,

    topTabTextColor: 'white',
    selectedTopTabIndicatorColor: 'white',
    selectedTopTabTextColor: 'green',
    tabBarHidden: false,
    drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
    screen: {
        screen: 'app.CategoryScreen',
        title: 'MeeRoskiin',
        navigatorStyle,
        topTabs: [
            {
                title: 'Kategoriat',
                screenId: 'app.CategoryScreen',
            },
            {
                title: 'Kartta',
                screenId: 'app.CategoryScreen',
            }
        ],
    }
});