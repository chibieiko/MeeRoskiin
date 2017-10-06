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
import {View} from "react-native";

import {mainStyle} from "./styles/ExamplesListStyles";

export class ExamplesList extends Component {
    render() {
        const array = this.props.array;
        const styleProp = this.props.style;
        return (
            <Card>
                <CardItem header style={mainStyle.cardHeader}>
                    <View>
                        <Text
                            style={[mainStyle.cardHeaderText, styleProp]}>{this.props.title.toUpperCase()}</Text>
                    </View>
                </CardItem>
                {
                    array.map((item, index) => {
                        return <View key={index}>
                            {
                                item.type &&
                                <CardItem>
                                    <Body>
                                        <Text
                                            style={[mainStyle.exampleType, styleProp]}>
                                            {item.type}
                                        </Text>
                                    </Body>
                                </CardItem>
                            }

                            {
                                item.examples && item.examples.map((example, i) => {
                                    return <CardItem key={index + i}
                                                     style={mainStyle.example}>
                                        <Body>
                                            <Icon active
                                                  android={this.props.androidIcon}
                                                  ios={this.props.iosIcon}
                                                  style={styleProp}/>
                                            {
                                                Array.isArray(example) ?
                                                    <List>
                                                        {
                                                            example.map((value, j) => {
                                                                return <ListItem
                                                                    key={index + i + j}
                                                                    style={mainStyle.listItem}>
                                                                    <Text>{value}</Text>
                                                                </ListItem>
                                                            })
                                                        }
                                                    </List>
                                                    :
                                                    <Text
                                                        style={mainStyle.example}>{example}</Text>
                                            }
                                        </Body>
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