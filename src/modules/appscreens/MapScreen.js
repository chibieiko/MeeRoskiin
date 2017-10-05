import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    Root,
    Toast
} from 'native-base';
import {mainStyle} from "./styles/MapScreenStyles";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as mapScreenActions from '../../actions/appscreens/mapScreen.actions';

export class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        }
    }

    watchID: ?number = null;

    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.props.actions.saveUserLocation(userLocation);
            },
            (error) => {
                Toast.show({
                    text: 'Sijainnin saaminen epäonnistui',
                    position: 'bottom',
                    buttonText: 'OK'
                });
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

    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID)
    };

    render() {
        return (
            <Root>
                <View style={mainStyle.container}>
                    <Text style={mainStyle.welcome}>
                        Welcome to MeeRoskiin!
                    </Text>
                    <Text style={mainStyle.instructions}>
                        Sijaintisi: {'\n'}
                        {JSON.stringify(this.props.map.userLocation)}
                    </Text>
                    <Text style={mainStyle.instructions}>
                        Double tap R on your keyboard to reload,{'\n'}
                        Shake or press menu button for dev menu
                    </Text>
                </View>
            </Root>
        );
    }
}


mapStateToProps = (state, ownProps) => {
    return {
        map: state.map
    };
};

mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(mapScreenActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);