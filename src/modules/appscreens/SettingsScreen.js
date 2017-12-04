import React, {Component} from 'react';
import {
    Container,
    Content,
    ListItem,
    Text,
    Body,
    CheckBox
} from "native-base";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {CategoryFilterScreenStyles as mainStyle} from "./styles/CategoryFilterScreenStyles";
import * as strings from '../../res/strings.json';
import * as colors from '../../res/colors.json';
import * as errorActions from '../../actions/error.actions';
import * as actions from '../../actions/appscreens/mapScreen.actions';
import content from '../../res/categories';

export class SettingsScreen extends Component {
    render() {
        return (
            <Container style={mainStyle.container}>
                <Content style={mainStyle.content}>
                    <Text>
                        Tietoja tänne
                    </Text>
                </Content>
            </Container>
        );
    }
}

mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors
    };
};

mapDispatchToProps = dispatch => {
    return {
        errorActions: bindActionCreators(errorActions, dispatch),
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);