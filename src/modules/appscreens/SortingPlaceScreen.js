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
    Toast,
    Form,
    Item,
    Input,
    Picker,
    View,
    Button
} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import xml2js from 'react-native-xml2js';

import {SortingPlaceScreenStyles as mainStyle} from "./styles/SortingPlaceScreenStyles";
import * as sortingPlaceScreenActions from '../../actions/appscreens/sortingPlaceScreen.actions'
import * as errorActions from '../../actions/error.actions';
import * as strings from '../../res/strings.json';
import categoryNames from '../../res/categoryNames';
import {ExamplesList} from "../global/ExamplesList";
import * as api from '../../constants/api';

export class SortingPlaceScreen extends Component {
    state = {
        fields: [
            {
                name: 'rate',
                value: 1
            },
            {
                name: 'comment',
                value: ''
            }
        ],
        selectedType: null,
        types: []
    };

    componentWillMount() {
        const currentPlace = this.props.sortingPlaces.infos.find(place => {
            return place.paikka_id === this.props.siteId
        });

        if (!currentPlace) {
            this.props.actions.fetchSortingPlaceInfo(this.props.siteId);
        } else {
            this.props.actions.updateCurrentPlace(currentPlace);
        }
    }

    componentWillUnmount() {
        this.props.actions.updateCurrentPlace(null);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sortingPlaces.currentPlace !== this.props.sortingPlaces.currentPlace) {
            // Check which trash types currentPlace accepts and save it's key to types list
            const types = Object.keys(nextProps.sortingPlaces.currentPlace).filter(key => {
                return nextProps.sortingPlaces.currentPlace[key] === '1' && categoryNames[key];
            });

            const typeObjects = types.map(typeKey =>
                categoryNames[typeKey]
            );

            this.setState({
                types: typeObjects,
                selectedType: typeObjects[0].id
            })
        }

        if (nextProps.errors && nextProps.errors.length > 0) {
            Toast.show({
                text: nextProps.errors[nextProps.errors.length - 1],
                position: 'bottom',
                buttonText: strings.toastButtonText
            });

            this.props.errorActions.removeError(nextProps.errors.length - 1);
        }
    }

    onValueChange(value) {
        this.setState({
            selectedType: value
        })
    };

    onChange = (value, key) => {
        let fields = this.state.fields.map(field => {
            if (field.name === key) {
                field.value = value
            }

            return field;
        });

        this.setState({
            fields: fields
        })
    };

    defineActiveButton = value => {
        let active = false;
        this.state.fields.forEach(field => {
            if (field.name === 'rate' && field.value === value) {
                active = true;
            }
        });

        return active;
    };

    sendFeedback = () => {
        let comment = '';
        let rate = 1;

        this.state.fields.forEach(field => {
            if (field.name === 'comment') {
                comment = field.value;
            } else {
                rate = field.value
            }
        });

        let url = api.KIVO_API_URL + '/rating.php?site_id=' + this.props.siteId + '&type_id=' + this.state.selectedType + '&rate=' + rate + '&comment=' + comment;
        console.log("url", url);

        fetch(url, {
            method: 'GET',
        })
            .then(response => response.text())
            .then(responseXML => {
                return xml2js.parseString(responseXML, (err, result) => {
                    if (!err && result.response.status[0] === 'ok') {
                        console.log('feedback result', result);

                        this.setState({
                            fields: [
                                {
                                    name: 'rate',
                                    value: 1
                                },
                                {
                                    name: 'comment',
                                    value: ''
                                }
                            ]
                        })
                        // todo snackbar with thanks
                    } else {
                        // todo snackbar with error
                        console.error(err);
                    }
                })
            })
            .catch(error => {
                // todo snackbar with error
                console.error(error);
            });
    };

    buildAcceptsList = currentPlace => {
        if (currentPlace && this.state.types) {
            const typeNames = this.state.types.map(type => type.name);

            // Modify data so ExamplesList is happy.
            const accepts = [
                {
                    type: null,
                    examples: typeNames,
                }
            ];

            return <ExamplesList array={accepts}
                                 title={strings.acceptsTitle}
                                 androidIcon='md-checkmark'
                                 iosIcon='ios-checkmark'
                                 style={mainStyle.positive}/>
        }
    };

    render() {
        const currentPlace = this.props.sortingPlaces.currentPlace;
        return (
            <Container style={mainStyle.container}>
                {
                    currentPlace &&
                    <Content style={mainStyle.content}>

                        <Card>
                            <CardItem header style={mainStyle.cardHeader}>
                                <Text style={mainStyle.cardHeaderText}>
                                    {strings.basicInformationTitle.toUpperCase()}
                                </Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text>{currentPlace.nimi}</Text>
                                <Text>{currentPlace.osoite}</Text>
                                <Text>{currentPlace.paikkakunta}</Text>
                                {
                                    currentPlace.yhteys !== "" &&
                                    <Text>{currentPlace.yhteys}</Text>
                                }
                                </Body>
                            </CardItem>
                            {
                                currentPlace.kuvaus !== "" &&
                                <CardItem>
                                    <Body>
                                    <Text style={mainStyle.description}>
                                        {strings.description}
                                    </Text>
                                    <Text>{currentPlace.kuvaus}</Text>
                                    </Body>
                                </CardItem>
                            }
                            <CardItem>
                                <Body>
                                <Text style={mainStyle.description}>
                                    {strings.maintainedBy}
                                </Text>
                                <Text>{currentPlace.yllapitaja}</Text>
                                </Body>
                            </CardItem>

                        </Card>

                        {
                            this.buildAcceptsList(currentPlace)
                        }

                        {
                            this.state.selectedType &&
                            <Card>
                                <CardItem header style={mainStyle.cardHeader}>
                                    <Text style={mainStyle.cardHeaderText}>
                                        {strings.feedbackTitle.toUpperCase()}
                                    </Text>
                                </CardItem>
                                <CardItem>
                                    <View style={mainStyle.formWrapper}>
                                        <Form style={mainStyle.form}>
                                            <Picker
                                                iosHeader={strings.feedbackIosPickerHeader}
                                                mode='dropdown'
                                                selectedValue={this.state.selectedType}
                                                onValueChange={this.onValueChange.bind(this)}>
                                                {
                                                    this.state.types.map((type, index) => {
                                                        return <Item
                                                            key={index}
                                                            label={type.name}
                                                            value={type.id}/>
                                                    })
                                                }
                                            </Picker>

                                            <View
                                                style={mainStyle.likeContainer}>
                                                <Button
                                                    onPress={() => this.onChange(1, 'rate')}
                                                    style={this.defineActiveButton(1) ? mainStyle.feedbackButton : [mainStyle.feedbackButton, mainStyle.nonActiveButton]}>
                                                    <Icon android='md-thumbs-up'
                                                          ios='ios-thumbs-up'/>
                                                </Button>
                                                <Button
                                                    onPress={() => this.onChange(-1, 'rate')}
                                                    style={this.defineActiveButton(-1) ? mainStyle.feedbackButton : [mainStyle.feedbackButton, mainStyle.nonActiveButton]}>
                                                    <Icon
                                                        android='md-thumbs-down'
                                                        ios='ios-thumbs-down'/>
                                                </Button>
                                            </View>

                                            <Item style={mainStyle.textInput}>
                                                <Input
                                                    placeholder={strings.feedbackPlaceHolder}
                                                    value={this.defineActiveButton()}
                                                    onChangeText={text => this.onChange(text, 'comment')}
                                                    autoCapitalize='sentences'
                                                    maxLength={255}
                                                />
                                            </Item>

                                            <View
                                                style={mainStyle.likeContainer}>
                                                <Button
                                                    style={mainStyle.feedbackButton}
                                                    onPress={this.sendFeedback}>
                                                    <Text>
                                                        {strings.feedbackSend}
                                                    </Text>
                                                </Button>
                                            </View>
                                        </Form>
                                    </View>

                                </CardItem>
                            </Card>
                        }

                    </Content>
                }

            </Container>
        );
    }
}

mapStateToProps = (state, ownProps) => {
    return {
        sortingPlaces: state.sortingPlacesInfo,
        errors: state.errors
    };
};

mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(sortingPlaceScreenActions, dispatch),
        errorActions: bindActionCreators(errorActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingPlaceScreen);