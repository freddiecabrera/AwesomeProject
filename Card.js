import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textColor}>{this.props.id}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 434,
        width: Width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5A4FA1',
        borderWidth: 2,
        borderColor: '#FD748E'
    },
    textColor: {
        color: 'white'
    }
});

export default Card;