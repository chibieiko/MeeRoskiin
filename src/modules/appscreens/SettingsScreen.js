import React, {Component} from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Text,
    Right,
    Body,
    Icon
} from "native-base";
import {View, Slider} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {CategoryFilterScreenStyles as mainStyle} from "./styles/CategoryFilterScreenStyles";
import * as errorActions from '../../actions/error.actions';
import * as actions from '../../actions/appscreens/mapScreen.actions';
import * as strings from '../../res/strings.json';
import * as dimensions from '../../res/dimensions.json';

export class SettingsScreen extends Component {
    updateNumberOfPlacesShown = (value) => {
        console.log("new value: ", value);
        this.props.actions.updateNumberOfPlacesShown(value);
    };

    render() {
        return (
            <Container style={mainStyle.container}>
                <Content style={mainStyle.content}>
                    <View style={mainStyle.infoContainer}>
                        <List>
                            <ListItem style={mainStyle.listItem} icon>
                                <Body style={mainStyle.itemBody}>
                                <Text>{strings.licences}</Text>
                                </Body>
                                <Right>
                                    <Icon ios='ios-arrow-forward'
                                          android='md-arrow-forward'/>
                                </Right>
                            </ListItem>
                            <ListItem style={mainStyle.listItem} icon>
                                <Body style={mainStyle.itemBody}>
                                <Text>{strings.information}</Text>
                                </Body>
                                <Right>
                                    <Icon ios='ios-arrow-forward'
                                          android='md-arrow-forward'/>
                                </Right>
                            </ListItem>
                        </List>
                    </View>
                    <View style={mainStyle.settingsContainer}>
                        <Text>
                            {strings.setNumberOfSortingPlaces}
                        </Text>
                        <Slider
                            style={mainStyle.slider}
                            minimumValue={dimensions.sliderMinValue}
                            maximumValue={dimensions.sliderMaxValue}
                            onSlidingComplete={this.updateNumberOfPlacesShown}
                            step={dimensions.sliderStep}
                            value={this.props.map.numberOfPlacesToShowPerCategory}
                        />
                    </View>
                </Content>
            </Container>
        );
    }
}

mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
        map: state.map
    };
};

mapDispatchToProps = dispatch => {
    return {
        errorActions: bindActionCreators(errorActions, dispatch),
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);