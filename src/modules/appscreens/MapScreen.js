import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {
    Root,
    Toast
} from 'native-base';
import {ActivityIndicator} from "react-native";
import {mainStyle} from "./styles/MapScreenStyles";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as mapScreenActions from '../../actions/appscreens/mapScreen.actions';
import * as errorActions from '../../actions/error.actions';
import * as strings from '../../res/strings.json';

export class MapScreen extends Component {
    latitudeDelta = 0.122; //0.922;
    longitudeDelta = 0.021; //0.0421;

    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            region: {
                latitude: 61.49911,
                longitude: 23.78712,
                latitudeDelta: this.latitudeDelta,
                longitudeDelta: this.longitudeDelta
            },
        }
    }

    watchID: ?number = null;

    componentDidMount() {
        this.props.actions.startLoading(true);
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
            {enableHighAccuracy: false, timeout: 200000, maximumAge: 200000}
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
        if (nextProps.map.userLocation !== this.props.map.userLocation) {
            this.setState({
                region: {
                    latitude: nextProps.map.userLocation.lat,
                    longitude: nextProps.map.userLocation.lng,
                    latitudeDelta: this.latitudeDelta,
                    longitudeDelta: this.longitudeDelta
                }
            })
        }

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
                    showsUserLocation
                    showsMyLocationButton
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
                <ActivityIndicator
                    animating={this.props.map.loading}
                    size="large"
                    style={mainStyle.loadingSpinner}
                />
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