import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text,
    Icon as BaseIcon,
    Right,
    Left,
    Body,
    Card,
    CardItem,
} from "native-base";
import {View} from "react-native";
import Icon from 'react-native-vector-icons/Octicons';

import {ExamplesListStyles as mainStyle} from "./styles/ExamplesListStyles";

export class ExamplesList extends Component {
    render() {
        const array = this.props.array;
        const styleProp = this.props.style;
        return (
            <Card>
                <CardItem header style={mainStyle.cardHeader}>
                    <Text
                        style={[mainStyle.cardHeaderText, styleProp]}>{this.props.title.toUpperCase()}</Text>
                </CardItem>
                {
                    array.map((item, index) => {
                        return <View key={index}>
                            {
                                item.type &&
                                <CardItem>
                                    <Text
                                        style={[mainStyle.exampleType, styleProp]}>
                                        {item.type}
                                    </Text>
                                </CardItem>
                            }

                            {
                                item.examples && item.examples.map((example, i) => {
                                    return <CardItem key={index + i}
                                                     style={mainStyle.example}>
                                        {
                                            Array.isArray(example) ?
                                                <List>
                                                    {
                                                        example.map((value, j) => {
                                                            return <ListItem
                                                                key={index + i + j}
                                                                style={mainStyle.listItem}>
                                                                <Icon
                                                                    name='primitive-dot'
                                                                    style={styleProp}/>
                                                                <Text style={mainStyle.innerExample}>{value}</Text>
                                                            </ListItem>
                                                        })
                                                    }
                                                </List>
                                                :
                                                <View
                                                    style={mainStyle.itemContainer}>
                                                    <BaseIcon active
                                                              android={this.props.androidIcon}
                                                              ios={this.props.iosIcon}
                                                              style={styleProp}/>
                                                    <Text
                                                        style={mainStyle.example}>{example}</Text>
                                                </View>
                                        }
                                    </CardItem>
                                })
                            }
                        </View>
                    })
                }
            </Card>
        );
    }
}