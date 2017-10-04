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

import {mainStyle} from "./styles/CategoryInformationScreenStyles";
import content from '../../categories';
import {ExamplesList} from '../global/ExamplesList';

export class CategoryInformationScreen extends Component {
    render() {
        const category = this.props.category;
        return (
            <Container>
                <Content>
                    <ExamplesList array={category.yes} androidIcon='md-checkmark' iosIcon='ios-checkmark'/>
                    <ExamplesList array={category.no} androidIcon='md-close' iosIcon='ios-close'/>
                    <ExamplesList array={category.remember} androidIcon='md-information-circle' iosIcon='ios-information-circle-outline'/>
                </Content>
            </Container>
        );
    }
}