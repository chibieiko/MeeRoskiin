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

export class SortingPlaceScreen extends Component {
    componentWillMount() {
        console.log("mounting sorting palce screen");
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
        console.log("will receive props: ", nextProps);

        if (nextProps.errors && nextProps.errors.length > 0) {
            Toast.show({
                text: nextProps.errors[nextProps.errors.length - 1],
                position: 'bottom',
                buttonText: strings.toastButtonText
            });

            this.props.errorActions.removeError(nextProps.errors.length - 1);
        }
    }

    render() {
        console.log("info here", this.props.sortingPlaces.currentPlace);
        const currentPlace = this.props.sortingPlaces.currentPlace;
        return (
            <Container style={mainStyle.container}>
                <Content style={mainStyle.content}>
                    {
                        currentPlace &&
                        <View style={mainStyle.trashTypeContainer}>
                            {
                                currentPlace.akut === '1' &&
                                <Text>Akut</Text>
                            }
                            {
                                currentPlace.bio === '1' &&
                                <Text>Bio</Text>
                            }
                            {
                                currentPlace.energia === '1' &&
                                <Text>Energia</Text>
                            }
                            {
                                currentPlace.kartonki === '1' &&
                                <Text>Kartonki</Text>
                            }
                            {
                                currentPlace.kyllastetty === '1' &&
                                <Text>Kyllästetty puu</Text>
                            }
                            {
                                currentPlace.lamput === '1' &&
                                <Text>Lamput</Text>
                            }
                            {
                                currentPlace.lasi === '1' &&
                                <Text>Lasi</Text>
                            }
                            {
                                currentPlace.metalli === '1' &&
                                <Text>Metalli</Text>
                            }
                            {
                                currentPlace.muovi === '1' &&
                                <Text>Muovi</Text>
                            }
                            {
                                currentPlace.muu === '1' &&
                                <Text>Muu jäte</Text>
                            }
                            {
                                currentPlace.pahvi === '1' &&
                                <Text>Pahvi</Text>
                            }
                            {
                                currentPlace.paperi === '1' &&
                                <Text>Paperi</Text>
                            }
                            {
                               currentPlace.paristot === '1' &&
                                <Text>Paristot</Text>
                            }
                            {
                                currentPlace.puu === '1' &&
                                <Text>Puujäte</Text>
                            }
                            {
                                currentPlace.rakennujate === '1' &&
                                <Text>Rakennusjäte</Text>
                            }
                            {
                                currentPlace.seka === '1' &&
                                <Text>Sekajäte</Text>
                            }
                            {
                                currentPlace.ser === '1' &&
                                <Text>SER</Text>
                            }
                            {
                                currentPlace.tekstiili === '1' &&
                                <Text>Tekstiili</Text>
                            }
                            {
                                currentPlace.vaarallinen === '1' &&
                                <Text>Vaarallinen jäte</Text>
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