import React, {Component} from 'react';
import {
    Container,
    Content,
    ListItem,
    Text,
    Body,
    CheckBox
} from "native-base";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {CategoryFilterScreenStyles as mainStyle} from "./styles/CategoryFilterScreenStyles";
import * as strings from '../../res/strings.json';
import * as colors from '../../res/colors.json';
import * as errorActions from '../../actions/error.actions';
import content from '../../categories';

export class CategoryFilterScreen extends Component {
    updateFilters = categoryId => {
        console.log("categoryId", categoryId);
    };

    render() {
        console.log("content", content);
        return (
            <Container style={mainStyle.container}>
                <Content style={mainStyle.content}>
                    {
                        _.sortBy(content.categories, 'name').map(category => {
                            return <ListItem style={mainStyle.listItem} key={category.id}>
                                <CheckBox checked={this.props.map.selectedFilters.includes(id => id === category.id)}
                                onPress={() => this.updateFilters(category.id)}
                                color={colors.primary}/>
                                <Body>
                                    <Text>{category.name}</Text>
                                </Body>
                            </ListItem>
                        })
                    }
                </Content>
            </Container>
        );
    }
}

mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
        map: state.map
    };
};

mapDispatchToProps = dispatch => {
    return {
        errorActions: bindActionCreators(errorActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilterScreen);