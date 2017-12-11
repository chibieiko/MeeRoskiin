import * as colors from '../../../res/colors.json';
import * as dimensions from '../../../res/dimensions.json';

export const LicenseScreenStyles = {
    container: {
        backgroundColor: colors.backgroundColor
    },
    textView: {
        padding: dimensions.paddingVertical
    },
    title: {
        fontSize: dimensions.fontBig,
        color: colors.primaryDark,
        marginTop: 10
    },
    myText: {
        marginVertical: 8,
        color: colors.primary,
        fontSize: dimensions.fontNormal
    }
};