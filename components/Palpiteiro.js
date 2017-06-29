import React from 'react';
import { ActivityIndicator, Text, ListView, View } from 'react-native';

export default class Palpiteiro extends React.Component {
    constructor(props){
        super(props);
        this.state = {palpiteiro : [], loading: true};
    }

    componentDidMount(){
        fetch('http://192.168.1.68:8080/palpiteiro',{
                timeout: 5000,
                method: 'GET'
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState(previousState => {
                    return { palpiteiro : response.json(), loading: false };
                });
            })
            .catch(e => {
                this.setState(previousState => {
                    return { loading: false, palpiteiro : [] };
                })
            });
    }

    render() {
        if(this.state.loading)
            return(
                <View>                    
                    <Text>Aguarde, carregando...</Text>
                    <ActivityIndicator />
                </View>
            );
        else
            return(
                <View>
                    <Text>{this.state.palpiteiro.length} palpiteiros cadastrados</Text>
                </View>
            );
    }
}