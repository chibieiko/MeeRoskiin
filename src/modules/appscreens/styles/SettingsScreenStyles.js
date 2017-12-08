import * as colors from '../../../res/colors.json';
import * as dimensions from '../../../res/dimensions.json';

export const SettingsScreenStyles = {
    container: {
        backgroundColor: colors.backgroundColor
    },
    settingsContainer: {
        flex: 1,
        margin: dimensions.paddingVertical
    },
    infoContainer: {
        flex: 1
    },
    listItem: {
        backgroundColor: 'transparent',
        marginLeft: 0
    },
    itemBody: {
        paddingLeft: dimensions.paddingHorizontal
    },
    slider: {
        color: colors.primary
    },
    sliderValue: {
        fontSize: 40,
        alignSelf: 'center',
        marginVertical: 20
    }
};