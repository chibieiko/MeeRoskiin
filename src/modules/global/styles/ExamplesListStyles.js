import {StyleSheet} from 'react-native';
import * as dimensions from '../../../res/dimensions.json';

export const ExamplesListStyles = {
    listItem: {
        borderBottomWidth: 0
    },
    exampleType: {
        fontSize: dimensions.fontBig
    },
    example: {
        paddingRight: dimensions.cardMargin
    },
    cardHeader: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    cardHeaderText: {
        fontWeight: 'bold',
        fontSize: dimensions.fontBig
    }
};