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
    innerExample: {
        marginLeft: 4
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 4
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