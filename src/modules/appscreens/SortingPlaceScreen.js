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

import {SortingPlaceScreenStyles as mainStyle} from "./styles/SortingPlaceScreenStyles";

import * as strings from '../../res/strings.json';

export class SortingPlaceScreen extends Component {
    render() {
        return (
            <Container style={mainStyle.container}>
                <Content style={mainStyle.content}>
                    <Text>
                        Sorting place: {this.props.siteId} info here
                    </Text>
                </Content>
            </Container>
        );
    }
}