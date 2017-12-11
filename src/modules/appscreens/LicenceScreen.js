import React, {Component} from 'react';
import {
    Container,
    Content,
    Text,
} from "native-base";
import {View} from 'react-native';
import HTMLView from 'react-native-htmlview';

import {LicenseScreenStyles as mainStyle} from "./styles/LicenseScreenStyles";
import licences from '../../res/licences';
import {mitLicense, apacheLicense, bsdLicense} from "../../res/licences";

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
                                <Text selectable style={mainStyle.myText}>
                                    {license.copyright}
                                </Text>
                                {
                                    license.license === 'mit' &&
                                        <HTMLView value={mitLicense}/>
                                }
                                {
                                    license.license === 'apache' &&
                                        <HTMLView value={apacheLicense}/>
                                }
                                {
                                    license.license === 'bsd' &&
                                        <HTMLView value={bsdLicense}/>
                                }
                            </View>
                        })
                    }
                </Content>
            </Container>
        );
    }
}

