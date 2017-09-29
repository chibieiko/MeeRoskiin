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
    Card,
    CardItem,
} from "native-base";
import {mainStyle} from "./styles/CategoryInformationScreenStyles";
import content from '../../categories';
import myTheme from '../../themes/myTheme';

export class CategoryInformationScreen extends Component {
    render() {
        const category = this.props.category;
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Icon active name='md-checkmark'/>
                            <Text>{category.name}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}