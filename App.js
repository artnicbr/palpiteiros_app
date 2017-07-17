import React from 'react';
import { Text, TextInput, Image, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen';

const App = StackNavigator({
    Home: { 
       screen: HomeScreen
    },
    Register : {
       screen: RegisterScreen
    }
});

export default App;
