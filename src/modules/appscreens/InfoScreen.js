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

import {InfoScreenStyles as mainStyle} from "./styles/InfoScreenStyles";
import * as strings from '../../res/strings.json';

export default class InfoScreen extends Component {
    render() {
        return (
            <Container style={mainStyle.container}>
                <Content>
                    <Text style={mainStyle.text} selectable>
                        {strings.recyclingInfo}
                    </Text>
                    <Text selectable>
                        {strings.sortingPlaceInfo}
                    </Text>
                </Content>
            </Container>
        );
    }
}