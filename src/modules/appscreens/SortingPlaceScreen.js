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
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {SortingPlaceScreenStyles as mainStyle} from "./styles/SortingPlaceScreenStyles";
import * as sortingPlaceScreenActions from '../../actions/appscreens/sortingPlaceScreen.actions'
import * as errorActions from '../../actions/error.actions';

import * as strings from '../../res/strings.json';

export class SortingPlaceScreen extends Component {
    componentWillMount() {
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

    render() {
        return (
            <Container style={mainStyle.container}>
                <Content style={mainStyle.content}>
                    <Text>
                        Sorting place: {this.props.siteId} info here
                    </Text>
                    {
                        this.props.sortingPlaces.currentPlace &&
                        <View>
                            {
                                this.props.sortingPlaces.currentPlace.akut === 1 &&
                                <Text>Akut</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.bio === 1 &&
                                <Text>Bio</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.energia === 1 &&
                                <Text>Energia</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.kartonki === 1 &&
                                <Text>Kartonki</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.kyllastetty === 1 &&
                                <Text>Kyllästetty puu</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.lamput === 1 &&
                                <Text>Lamput</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.lasi === 1 &&
                                <Text>Lasi</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.metalli === 1 &&
                                <Text>Metalli</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.muovi === 1 &&
                                <Text>Muovi</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.muu === 1 &&
                                <Text>Muu jäte</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.pahvi === 1 &&
                                <Text>Pahvi</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.paperi === 1 &&
                                <Text>Paperi</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.paristot === 1 &&
                                <Text>Paristot</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.puu === 1 &&
                                <Text>Puujäte</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.rakennujate === 1 &&
                                <Text>Rakennusjäte</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.seka === 1 &&
                                <Text>Sekajäte</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.ser === 1 &&
                                <Text>SER</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.tekstiili === 1 &&
                                <Text>Tekstiili</Text>
                            },
                            {
                                this.props.sortingPlaces.currentPlace.vaarallinen === 1 &&
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