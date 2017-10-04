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
        return (
            <Card>
                {
                    array.map((item, index) => {
                        return <View key={index}>
                            {
                                item.type &&
                                <CardItem>
                                    <Text style={mainStyle.exampleType}>
                                        {item.type}
                                    </Text>
                                </CardItem>
                            }

                            {
                                item.examples && item.examples.map((example, i) => {
                                    return <CardItem key={i}>
                                        <Icon active
                                              android={this.props.androidIcon}
                                              ios={this.props.iosIcon}/>
                                        {
                                            Array.isArray(example) ?
                                                <List>
                                                    {
                                                        example.map((value, j) => {
                                                            return <ListItem key={j} style={mainStyle.listItem}>
                                                                <Text>{value}</Text>
                                                            </ListItem>
                                                        })
                                                    }
                                                </List>
                                                :
                                                <Text>{example}</Text>
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