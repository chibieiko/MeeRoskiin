import {Dimensions} from 'react-native';
import * as colors from '../../../res/colors.json';
import * as dimensions from '../../../res/dimensions.json';

export const MapScreenStyles = {
    mapContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    markerIcon: {
        color: 'white',
        backgroundColor: colors.primary,
        fontSize: dimensions.fontBig,
        padding: 2,
        borderRadius: 12
    },
    markerCallout: {
        width: 150
    },
    calloutText: {
        color: colors.textDark,
        fontSize: dimensions.fontNormal,
        padding: 4
    },
    calloutLink: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4
    },
    calloutLinkText: {
        color: colors.primary,
        fontSize: dimensions.fontNormal
    },
    calloutLinkIcon: {
        fontSize: dimensions.fontNormal,
        color: colors.primary,
        marginLeft: 4,
        paddingTop: 2
    },
    loadingSpinner: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 20,
        left: Dimensions.get('window').width / 2 - 18
    }
};