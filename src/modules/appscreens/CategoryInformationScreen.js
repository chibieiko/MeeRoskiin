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
import {mainStyle} from "./styles/CategoryInformationScreenStyles";
import content from '../../categories';

export class CategoryInformationScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Text>
                                {this.props.categoryId}
                            </Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}