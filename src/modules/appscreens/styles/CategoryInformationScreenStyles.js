import * as colors from '../../../res/colors.json';
import * as dimensions from '../../../res/dimensions.json';

export const CategoryInformationScreenStyles = {
    container: {
        backgroundColor: colors.backgroundColor
    },
    positive: {
        color: colors.iconPositive
    },
    negative: {
        color: colors.iconNegative
    },
    neutral: {
        color: colors.iconNeutral
    },
    content: {
        paddingLeft: dimensions.sideMargin,
        paddingRight: dimensions.sideMargin
    },
};