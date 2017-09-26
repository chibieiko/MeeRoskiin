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
import {mainStyle} from "./styles/CategoryScreenStyles";
import content from '../../categories';

export class CategoryScreen extends Component {
    openCategory = id => {
        console.warn("open ", id);
    };

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        {
                            _.sortBy(content.categories, 'name').map(category => {
                                return <ListItem key={category.id} icon onPress={() => this.openCategory(category.id)}>
                                    <Body>
                                    <Text>
                                        {category.name}
                                    </Text>
                                    </Body>

                                    <Right>
                                        <Icon name='ios-arrow-forward'/>
                                    </Right>
                                </ListItem>
                            })
                        }
                    </List>
                </Content>
            </Container>
        );
    }
}