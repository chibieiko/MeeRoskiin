import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {
    Icon as BaseIcon,
    Fab,
    Button
} from 'native-base';
import {
    View,
    Text,
    Platform
} from 'react-native';
import Snackbar from 'react-native-snackbar';
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
    latitudeDelta = 4.5;
    longitudeDelta = 4.5;

    constructor(props) {
        super(props);

        const initialRegion = {
            latitude: 61.49911,
            longitude: 23.78712,
            latitudeDelta: this.latitudeDelta,
            longitudeDelta: this.longitudeDelta
        };

        this.state = {
            showToast: false,
            region: initialRegion,
            sortingPlaces: []
        };

        this.mapRef = null;
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
                this.props.actions.fetchSortingPlaces(userLocation, this.props.map.numberOfPlacesToShowPerCategory);
            },
            (error) => {
                console.log(error);
            },
            {
                enableHighAccuracy: true,
                timeout: 200000,
                maximumAge: 36000,
                distanceFilter: 2000
            }
        );
    };

    componentDidMount() {
        if (Platform.OS === 'android') {
            LocationServicesDialogBox.checkLocationServicesIsEnabled({
                message: strings.gpsWanted,
                ok: strings.use,
                cancel: strings.cancel,
                enableHighAccuracy: true, // true => GPS and network provider, false => only GPS
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

            this.fitToMarkerCoordinates(places);
            this.setState({
                sortingPlaces: places
            });
        } else {
            this.fitToMarkerCoordinates(nextProps.map.sortingPlaces);
            this.setState({
                sortingPlaces: nextProps.map.sortingPlaces
            });
        }

        if (nextProps.map.numberOfPlacesToShowPerCategory !== this.props.map.numberOfPlacesToShowPerCategory) {
            this.props.actions.fetchSortingPlaces(nextProps.map.userLocation, nextProps.map.numberOfPlacesToShowPerCategory)
        }

        // Update map region to user's location.
        if (nextProps.map.userLocation !== this.props.map.userLocation) {
            this.mapRef.animateToRegion({
                latitude: nextProps.map.userLocation.lat,
                longitude: nextProps.map.userLocation.lng,
                latitudeDelta: this.latitudeDelta,
                longitudeDelta: this.longitudeDelta
            })
        }

        // Update errors.
        if (nextProps.errors && nextProps.errors.length > 0) {
            Snackbar.show({
                title: nextProps.errors[nextProps.errors.length - 1],
                duration: Snackbar.LENGTH_LONG,
                action: {
                    title: strings.snackbarButtonText
                }
            });

            this.props.errorActions.removeError(nextProps.errors.length - 1);
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

    fitToMarkerCoordinates = places => {
        if (places.length > 0) {
            const coordinatesArray = places.map(marker => {
                return {
                    latitude: parseFloat(marker.$.lat),
                    longitude: parseFloat(marker.$.lng)
                }
            });
            coordinatesArray.push({
                latitude: this.props.map.userLocation.lat,
                longitude: this.props.map.userLocation.lng
            });
            this.mapRef.fitToCoordinates(coordinatesArray,
                {
                    animated: true, edgePadding: mainStyle.edgepadding
                }
            )
        }
    };

    render() {
        return (
            <View style={mainStyle.screenContainer}>
                <MapView
                    ref={ref => {
                        this.mapRef = ref
                    }}
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