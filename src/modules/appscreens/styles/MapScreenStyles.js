import {Dimensions} from 'react-native';

export const MapScreenStyles = {
    mapContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    markerCallout: {
        backgroundColor: 'white'
    },
    loadingSpinner: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 20,
        left: Dimensions.get('window').width / 2
    }
};