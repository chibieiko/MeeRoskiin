import * as colors from '../../../res/colors.json';
import * as dimensions from '../../../res/dimensions.json';

export const SortingPlaceScreenStyles = {
    container: {
        backgroundColor: colors.backgroundColor
    },
    content: {
        paddingHorizontal: dimensions.sideMargin
    },
    positive: {
        color: colors.iconPositive
    },
    cardHeader: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    cardHeaderText: {
        fontWeight: 'bold',
        fontSize: dimensions.fontBig,
        color: colors.primary
    },
    description: {
        fontSize: dimensions.fontBig,
        color: colors.primary,
        marginBottom: 4
    },
    formWrapper: {
        flex: 1
    },
    form: {
        alignSelf: 'stretch'
    },
    textInput: {
        marginLeft: 0
    }
};