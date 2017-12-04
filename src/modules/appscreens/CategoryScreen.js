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
    Body,
    Root,
    Button,
    Toast
} from "native-base";
import entypo from 'react-native-vector-icons/Entypo';

import {CategoryScreenStyles as mainStyle} from "./styles/CategoryScreenStyles";
import content from '../../res/categories';
import {globalStyles} from "../global/styles/globalStyles";

import * as strings from '../../res/strings.json';
import * as colors from '../../res/colors.json';

export class CategoryScreen extends Component {
    static navigatorButtons = {
        rightButtons: [
            {
                title: strings.settingsTitle,
                id: 'settings',
                buttonColor: colors.backgroundColor,
                buttonFontSize: '14'
            }
        ]
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'settings') {
                this.props.navigator.push({
                    screen: strings.settingsScreen,
                    title: strings.settingsTitle,
                    animated: true,
                    navigatorStyle: globalStyles.navStyle
                })
            }
        }
    }

    openCategory = id => {
        let category = content.categories.find(category => category.id === id);

        this.props.navigator.push({
            screen: strings.categoryInformationScreen,
            title: category.name,
            passProps: {category: category},
            animated: true,
            navigatorStyle: globalStyles.navStyle
        })
    };

    render() {
        return (
                <Container style={mainStyle.container}>
                    <Content>
                        <List>
                            {
                                _.sortBy(content.categories, 'name').map(category => {
                                    if (category.showOnCategoryPage) {
                                        return <ListItem key={category.id} icon
                                                         style={mainStyle.listItem}
                                                         onPress={() => this.openCategory(category.id)}>
                                            <Body style={mainStyle.itemBody}>
                                            <Text>
                                                {category.name}
                                            </Text>
                                            </Body>
                                            <Right>
                                                <Icon ios='ios-arrow-forward'
                                                      android='md-arrow-forward'/>
                                            </Right>
                                        </ListItem>
                                    }
                                })
                            }
                        </List>
                    </Content>
                </Container>
        );
    }
}