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
import {View} from 'react-native';

import {LicenseScreenStyles as mainStyle} from "./styles/LicenseScreenStyles";
import * as strings from '../../res/strings.json';
import licences from '../../res/licences';

export default class LicenseScreen extends Component {
    render() {
        return (
            <Container style={mainStyle.container}>
                <Content>
                    {
                        licences.map((license, index) => {
                            return <View key={index} style={mainStyle.textView}>
                                <Text style={mainStyle.title} selectable>
                                    {license.title}
                                </Text>
                                <MyText>
                                    {license.copyright}
                                </MyText>
                                {
                                    license.license === 'mit' ?
                                        <View>
                                            <MyText>{strings.mitLicensePart1}</MyText>
                                            <MyText>{strings.mitLicensePart2}</MyText>
                                            <MyText>{strings.mitLicensePart3}</MyText>
                                        </View>
                                        :
                                        <View>
                                            <MyText>{strings.apacheLicensePart1}</MyText>
                                            <MyText>{strings.apacheLicenseUrl}</MyText>
                                            <MyText>{strings.apacheLicensePart2}</MyText>
                                        </View>
                                }
                            </View>
                        })
                    }
                </Content>
            </Container>
        );
    }
}

class MyText extends Component {
    render() {
        return <Text selectable style={mainStyle.myText}>{this.props.children}</Text>
    }
}

