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
    Body
} from "native-base";

import {CategoryScreenStyles as mainStyle} from "./styles/CategoryScreenStyles";
import content from '../../categories';
import {globalStyles} from "../global/styles/globalStyles";

import * as strings from '../../res/strings.json';

export class CategoryScreen extends Component {
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
                                        <Body>
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