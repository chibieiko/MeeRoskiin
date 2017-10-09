import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {
    Root,
    Toast
} from 'native-base';
import {mainStyle} from "./styles/MapScreenStyles";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as mapScreenActions from '../../actions/appscreens/mapScreen.actions';
import * as errorActions from '../../actions/error.actions';
import * as strings from '../../res/strings.json';

export class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            region: {
                latitude: 61.49911,
                longitude: 23.78712,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        }
    }

    watchID: ?number = null;

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.props.actions.saveUserLocation(userLocation);
            },
            (error) => {
                console.log(error);
            },
            {enableHighAccuracy: true, timeout: 200000, maximumAge: 1000}
        );

        this.watchID = navigator.geolocation.watchPosition(position => {
            let userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            this.props.actions.saveUserLocation(userLocation);
            this.props.actions.fetchSortingPlaces(userLocation);
        });
    };

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    };

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
            <Root>
                <MapView
                    style={mainStyle.mapContainer}
                    showUserLocation={true}
                    showMyLocationButton={true}
                    initialRegion={this.state.region}>
                    {
                        this.props.map.sortingPlaces.length > 0 &&
                            this.props.map.sortingPlaces.map((marker, index) => (
                                <MapView.Marker key={index}
                                coordinate={{
                                    latitude: parseFloat(marker.$.lat),
                                    longitude: parseFloat(marker.$.lng)
                                }}
                                title={marker.nimi}
                                description={marker.osoite}
                                />
                            ))
                    }
                </MapView>
            </Root>
        );
    }
}


mapStateToProps = (state, ownProps) => {
    return {
        map: state.map,
        errors: state.errors
    };
};

mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(mapScreenActions, dispatch),
        errorActions: bindActionCreators(errorActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);