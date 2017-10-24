import {StyleSheet} from 'react-native';

import * as colors from '../../../res/colors.json';

export const CategoryScreenStyles = {
    navStyle: {
        statusBarColor: colors.primaryDark,
        navigationBarColor: 'black',
        navBarBackgroundColor: colors.primary,
        navBarTextColor: colors.textLight,
        navBarButtonColor: colors.textLight,
        statusBarTextColorScheme: 'light'
    },
    listItem: {
        backgroundColor: 'transparent'
    }
};