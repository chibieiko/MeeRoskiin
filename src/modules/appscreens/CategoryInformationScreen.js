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
import * as strings from '../../res/strings.json';

export class CategoryInformationScreen extends Component {
    render() {
        const category = this.props.category;
        return (
            <Container>
                <Content style={mainStyle.content}>
                    {
                        category.yes.length > 0 && <ExamplesList array={category.yes}
                                                      androidIcon='md-checkmark'
                                                      iosIcon='ios-checkmark'
                                                      style={mainStyle.positive}
                                                      title={strings.yesTitle}/>
                    }
                    {
                        category.no.length > 0 &&
                        <ExamplesList array={category.no} androidIcon='md-close'
                                      iosIcon='ios-close'
                                      style={mainStyle.negative}
                                      title={strings.noTitle}/>
                    }
                    {
                        category.remember.length > 0 &&
                        <ExamplesList array={category.remember}
                                      androidIcon='md-information-circle'
                                      iosIcon='ios-information-circle-outline'
                                      style={mainStyle.neutral}
                                      title={strings.rememberTitle}/>
                    }
                </Content>
            </Container>
        );
    }
}