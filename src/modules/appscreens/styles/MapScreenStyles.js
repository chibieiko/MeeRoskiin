import {Dimensions} from 'react-native';
import * as colors from '../../../res/colors.json';
import * as dimensions from '../../../res/dimensions.json';

export const MapScreenStyles = {
    screenContainer: {
        flex: 1
    },
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
        padding: 2
    },
    calloutLink: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 2,
        paddingTop: 8,
        paddingBottom: 2
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
    fab: {
        backgroundColor: 'white'
    },
    fabIcon: {
        color: colors.primary,
        fontSize: 30
    },
    loadingSpinner: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 20,
        left: Dimensions.get('window').width / 2 - 18
    },
    edgepadding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
    }
};