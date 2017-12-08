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

import {LicenseScreenStyles as mainStyle} from "./styles/LicenseScreenStyles";
import * as strings from '../../res/strings.json';
import * as dimensions from '../../res/dimensions.json';

export default class LicenseScreen extends Component {
    render() {
        return (
            <Container style={mainStyle.container}>
                <Content>
                    <Text>
                        Licences here
                    </Text>
                </Content>
            </Container>
        );
    }
}