import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {mainStyle} from "./styles/CategoryScreenStyles";

export class CategoryScreen extends Component {
    render() {
        return (
            <View style={mainStyle.container}>
                <Text style={mainStyle.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={mainStyle.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={mainStyle.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}