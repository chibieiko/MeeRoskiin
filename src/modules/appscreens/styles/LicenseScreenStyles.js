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
        color: colors.primary,
        marginTop: 10
    },
    myText: {
        marginVertical: 8 ,
        fontSize: dimensions.fontNormal
    }
};