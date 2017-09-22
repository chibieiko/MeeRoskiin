import React, { Component } from 'react';
import { View } from 'react-native';
import {Provider} from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/AppIcons';
import configureStore from './store/configureStore';

import {CategoryScreen} from "./modules/appscreens/CategoryScreen";

const store = configureStore();
registerScreens(store, Provider);

const navigatorStyle = {
    statusBarColor: '#831d19',
    navigationBarColor: '#339999',
    navBarBackgroundColor: '#339999',
    navBarTextColor: '#ffffff',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    navBarHidden: true,
    tabBarButtonColor: 'red',
    tabBarSelectedButtonColor: 'red',
    tabBarBackgroundColor: 'red'
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
                    label: 'One',
                    screen: 'CategoryScreen',
                    title: 'MeeRoskiin',
                    navigatorStyle
                },
                {
                    label: 'Two',
                    screen: 'CategoryScreen',
                    title: 'MeeRoskiin',
                    navigatorStyle
                }
            ],
            tabsStyle: {

            }
        });
    }
}

export default App;