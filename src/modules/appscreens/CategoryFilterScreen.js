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
import * as actions from '../../actions/appscreens/mapScreen.actions';
import content from '../../res/categories';

export class CategoryFilterScreen extends Component {
    state = {
        filters: this.props.map.selectedFilters
    };

    componentWillUnmount() {
        this.props.actions.updateFilters(this.state.filters);
    }

    updateFilters = categoryId => {
        if (this.state.filters.includes(categoryId)) {
            let array = this.state.filters.filter(id => id !== categoryId);

            this.setState({
                filters: array
            })
        } else {
            let array = [...this.state.filters];
            array.push(categoryId);

            this.setState({
                    filters: array
                })
        }
    };

    render() {
        return (
            <Container style={mainStyle.container}>
                <Content style={mainStyle.content}>
                    {
                        _.sortBy(content.categories, 'name').map(category => {
                            return <ListItem style={mainStyle.listItem}
                                             key={category.id}
                                             onPress={() => this.updateFilters(category.id)}>
                                <CheckBox
                                    checked={this.state.filters.includes(category.id)}
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
        errorActions: bindActionCreators(errorActions, dispatch),
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilterScreen);