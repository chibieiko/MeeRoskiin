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
} from "native-base";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {CategoryInformationScreenStyles as mainStyle} from "./styles/CategoryInformationScreenStyles";
import content from '../../categories';
import * as strings from '../../res/strings.json';
import * as errorActions from '../../actions/error.actions';

export class CategoryFilterScreen extends Component {
    render() {
        return (
            <Container style={mainStyle.container}>
                <Content style={mainStyle.content}>
                    <Text>
                        categoryFilterScreen
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
        errorActions: bindActionCreators(errorActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilterScreen);