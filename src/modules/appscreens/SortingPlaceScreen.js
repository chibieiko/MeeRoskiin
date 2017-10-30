import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text,
    Icon,
    Right,
    Left,
    Body,
    Card,
    CardItem,
    Toast
} from 'native-base';
import {
    View
} from 'react-native'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {SortingPlaceScreenStyles as mainStyle} from "./styles/SortingPlaceScreenStyles";
import * as sortingPlaceScreenActions from '../../actions/appscreens/sortingPlaceScreen.actions'
import * as errorActions from '../../actions/error.actions';
import * as strings from '../../res/strings.json';
import categoryNames from '../../res/categoryNames';
import {ExamplesList} from "../global/ExamplesList";

export class SortingPlaceScreen extends Component {
    componentWillMount() {
        console.log("SortingPlaceScreen mounting");
        const currentPlace = this.props.sortingPlaces.infos.find(place => {
            return place.paikka_id === this.props.siteId
        });

        if (!currentPlace) {
            this.props.actions.fetchSortingPlaceInfo(this.props.siteId);
        } else {
            this.props.actions.updateCurrentPlace(currentPlace);
        }
    }

    componentWillUnmount() {
        this.props.actions.updateCurrentPlace(null);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors && nextProps.errors.length > 0) {
            Toast.show({
                text: nextProps.errors[nextProps.errors.length - 1],
                position: 'bottom',
                buttonText: strings.toastButtonText
            });

            this.props.errorActions.removeError(nextProps.errors.length - 1);
        }
    }

    buildItemList = currentPlace => {
        if (currentPlace) {
            // Check if currentPlace accepts trash type and save it's name to types list.
            let types = Object.keys(currentPlace).filter(key => {
                return currentPlace[key] === '1' && categoryNames[key];
            });

            types = types.map(typeKey => categoryNames[typeKey]);

            // Modify data so ExamplesList is happy.
            const accepts = [
                {
                    type: null,
                    examples: types,
                }
            ];

            return <ExamplesList array={accepts}
                                 title={strings.acceptsTitle}
                                 androidIcon='md-checkmark'
                                 iosIcon='ios-checkmark'
                                 style={mainStyle.positive}/>
        }
    };

    render() {
        const currentPlace = this.props.sortingPlaces.currentPlace;
        return (
            <Container style={mainStyle.container}>
                <Content style={mainStyle.content}>
                    {
                        currentPlace &&
                        <View style={mainStyle.trashTypeContainer}>
                            {
                                this.buildItemList(currentPlace)
                            }
                        </View>
                    }
                </Content>
            </Container>
        );
    }
}

mapStateToProps = (state, ownProps) => {
    return {
        sortingPlaces: state.sortingPlacesInfo,
        errors: state.errors
    };
};

mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(sortingPlaceScreenActions, dispatch),
        errorActions: bindActionCreators(errorActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingPlaceScreen);