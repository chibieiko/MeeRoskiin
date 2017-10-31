import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {
    Root,
    Toast,
    Icon as BaseIcon,
    Fab
} from 'native-base';
import {
    View,
    Text,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActivityIndicator} from "react-native";
import {MapScreenStyles as mainStyle} from "./styles/MapScreenStyles";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';

import {globalStyles} from "../global/styles/globalStyles";
import * as mapScreenActions from '../../actions/appscreens/mapScreen.actions';
import * as errorActions from '../../actions/error.actions';
import * as strings from '../../res/strings.json';

export class MapScreen extends Component {
    latitudeDelta = 0.122;
    longitudeDelta = 0.021;

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
            sortingPlaces: []
        }
    }

    watchID: ?number = null;

    watchPosition = () => {
        this.watchID = navigator.geolocation.watchPosition(
            (position) => {
                let userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.props.actions.saveUserLocation(userLocation);
                this.props.actions.fetchSortingPlaces(userLocation);
            },
            (error) => {
                console.log(error);
            },
            {enableHighAccuracy: false, timeout: 200000, maximumAge: 36000, distanceFilter: 1000}
        );
    };

    componentWillMount() {
        if (Platform.OS === 'android') {
            LocationServicesDialogBox.checkLocationServicesIsEnabled({
                message: "<h2>Käytä sijaintia?</h2> Sovellus haluaa käyttää asetuksiasi:<br/><br/>Käytä GPSää, Wi-Fiä ja mobiilidataa sijaintiin",
                ok: "KÄYTÄ",
                cancel: "PERUUTA",
                enableHighAccuracy: false, // true => GPS and network provider, false => only GPS
                showDialog: true, // false => Opens the Location access page directly.
                openLocationServices: true // false => Directly catch method is called if location services are turned off
            }).then(success => {
                this.watchPosition();
            })
        } else {
            this.watchPosition();
        }
    };

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    };

    componentWillReceiveProps(nextProps) {
        // Update state's sortingPlaces.
        if (nextProps.map.selectedFilters.length > 0) {
            let places = nextProps.map.sortingPlaces.filter(place => {
                return nextProps.map.selectedFilters.includes(parseInt(place.$.laji_id));
            });

            this.setState({
                sortingPlaces: places
            });
        } else {
            this.setState({
                sortingPlaces: nextProps.map.sortingPlaces
            });
        }

        // Update map region.
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

        // Update errors.
        if (nextProps.errors && nextProps.errors.length > 0) {
            Toast.show({
                text: nextProps.errors[nextProps.errors.length - 1],
                position: 'bottom',
                buttonText: strings.toastButtonText
            });

            this.props.errorActions.removeError(nextProps.errors.length - 1);
        }

        // Fetch filtered sorting places.
        if (nextProps.map.selectedFilters !== this.props.map.selectedFilters) {
            this.props.actions.fetchSortingPlaces(nextProps.map.userLocation);
        }
    }

    openSortingPlaceScreen = site => {
        this.props.navigator.push({
            screen: strings.sortingPlaceScreen,
            title: site.$.nimi,
            passProps: {siteId: site.$.paikka_id},
            animated: true,
            navigatorStyle: globalStyles.navStyle
        })
    };

    openCategoryFilter = () => {
        this.props.navigator.push({
            screen: strings.categoryFilterScreen,
            title: strings.categoryFilterScreenTitle,
            animated: true,
            navigatorStyle: globalStyles.navStyle
        })
    };

    render() {
        return (
            <Root>
                <View style={mainStyle.screenContainer}>
                    <MapView
                        style={mainStyle.mapContainer}
                        showsUserLocation
                        showsMyLocationButton
                        initialRegion={this.state.region}>
                        {
                            this.state.sortingPlaces.length > 0 &&
                            this.state.sortingPlaces.map((marker, index) => {
                                return <MapView.Marker key={index}
                                                       coordinate={{
                                                           latitude: parseFloat(marker.$.lat),
                                                           longitude: parseFloat(marker.$.lng)
                                                       }}>
                                    <Icon name='recycle'
                                          style={mainStyle.markerIcon}/>
                                    <MapView.Callout
                                        onPress={() => this.openSortingPlaceScreen(marker)}>
                                        <View style={mainStyle.markerCallout}>
                                            <Text style={mainStyle.calloutText}>
                                                {marker.$.nimi}
                                            </Text>
                                            <Text style={mainStyle.calloutText}>
                                                {marker.$.osoite}
                                            </Text>
                                            <View style={mainStyle.calloutLink}>
                                                <Text
                                                    style={mainStyle.calloutLinkText}>Lisätietoja</Text>
                                                <BaseIcon
                                                    style={mainStyle.calloutLinkIcon}
                                                    ios='ios-arrow-forward'
                                                    android='md-arrow-forward'/>
                                            </View>
                                        </View>
                                    </MapView.Callout>
                                </MapView.Marker>
                            })
                        }
                    </MapView>
                    <Fab
                        style={mainStyle.fab}
                        position='bottomRight'
                        onPress={this.openCategoryFilter}>
                        <BaseIcon name='md-list'
                                  style={mainStyle.fabIcon}/>
                    </Fab>
                    <ActivityIndicator
                        animating={this.props.map.fetchingPlaces}
                        size="large"
                        style={mainStyle.loadingSpinner}
                    />
                </View>
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