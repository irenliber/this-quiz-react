import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

export default HomeScreen;