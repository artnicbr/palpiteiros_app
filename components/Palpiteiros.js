import React from 'react';
import { ActivityIndicator, Text, ListView, View } from 'react-native';

export default class Palpiteiros extends React.Component {
    constructor(props){
        super(props);
        this.state = {palpiteiroDS : [], loading: true, error : null};
    }    

    componentDidMount(){
       fetch('http://192.168.0.58:8080/palpiteiro')
        .then((response) => response.json())
        .then((responseJson) => {
            var DS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState((prev) => {
                return {loading : false, palpiteiroDS : DS.cloneWithRows(responseJson)};
            });

            return true;
        })
        .catch((error) => {
            this.setState({error : error.message});
            return error;
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
        else if(this.state.error != null)
            return(
                <View>                    
                    <Text>ERRO: {this.state.error}</Text>
                </View>
            );
        else
            return(
                <View>
                    <ListView
                        dataSource={this.state.palpiteiroDS}
                        renderRow={(rowData) => <Text>{rowData.nome}</Text>}
                    >
                    </ListView>
                </View>
            );
    }
}