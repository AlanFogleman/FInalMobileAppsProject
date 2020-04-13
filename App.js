import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Main from './components/Main';
import Chat from './components/Chat';

import { createStackNavigator, StackNavigator } from 'react-navigation'; 

export class HomeScreen extends Component {

    render() {
        return (
            <View style={{
            flex: 1,
            flexDirection: 'column',
            }}> 
            <View style={{
                flex: 1,
                backgroundColor: '#4885ed',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white' }}>
                Chatster!
                </Text>
                <TouchableHighlight style={{ 
                                            margin: 20, 
                                            width: 200, 
                                            height: 45,
                                            backgroundColor: 'darkblue',
                                            padding: 10,
                                            alignItems: 'center',
                                         }}
                    onPress={() => {this.props.navigation.navigate('Main');                                             
                    }}>
                    <Text style={{color: 'white', fontSize: 18}}>Hello!</Text>
                </TouchableHighlight>
            </View>
        </View>);
    }
}

const navigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen},
  Main: { screen: Main },
  Chat: { screen: Chat },
});

export default navigator

//credit goes to Evan Bacon for the chat app project https://blog.expo.io/how-to-build-a-chat-app-with-react-native-3ef8604ebb3c