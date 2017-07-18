import React from 'react';
import { Text, TextInput, Image, View, Button } from 'react-native';
import Estilos from '../Styles/Form.js';
import { sha256 } from 'react-native-sha256';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Cadastre-se',
  };

  constructor(props) {
    super(props);    
    this.state = {
      nome : "",
      login: "",
      senha: "",
      email: "",
      validationError: ""
    }
  }

  registerUser(){    
    var configs = require("../config.json");
    sha256(this.state.senha).then((hash) => console.log(hash)).catch((error) => console.log(error));
    /*if(this.state.email.match(/^[^@]*@[^\.]*\..+$/gi) != null){
      sha256(this.state.senha).then((hash) => {

        this.setState((prevState) => {return {senha: hash}});

        fetch(configs.api_url + '/palpiteiro', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body : JSON.stringify(this.state)
          })
          .then( (response) => {console.log(response); response.json()} )
          .then( (responseJson) => {
            console.log(responseJson);
          })
          .catch( (error, response) => {
            console.log("ERROR!", error);
          });
      });
    }else{
      this.setState((prevState) => {return {validationError: "E-mail inválido!"}});
    }*/
  }

  render() {
    return (        
      <View style={{flex:1, flexDirection : 'column', padding: 10, marginTop: 25, justifyContent: 'flex-start'}}>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Formulário de cadastro</Text>
        <Text style={{fontSize: 14, alignSelf: 'center'}}>Todos os campos são obrigatórios</Text>
        <TextInput
          placeholder='Nome completo'
          keyboardType='default'
          returnKeyType='next'      
          style={Estilos.textinput}
          underlineColorAndroid='transparent'
          onChangeText={(textVal) => this.setState((prev) => {return {nome: textVal}})}
        />
        <TextInput
          placeholder='E-mail'
          keyboardType='default'
          returnKeyType='next'      
          style={Estilos.textinput}
          underlineColorAndroid='transparent'
          onChangeText={(textVal) => this.setState((prev) => {return {email: textVal}})}
        />
        <TextInput
          placeholder='Login'
          keyboardType='email-address'
          returnKeyType='next'      
          style={Estilos.textinput}
          underlineColorAndroid='transparent'
          onChangeText={(textVal) => this.setState((prev) => {return {login: textVal}})}
        />
        <TextInput
          placeholder='Senha'
          keyboardType='default'
          secureTextEntry={true}
          style={Estilos.textinput}
          underlineColorAndroid='transparent'
          onChangeText={(textVal) => this.setState((prev) => {return {senha: textVal}})}
        />
        <Button
          onPress={() => this.registerUser()}
          title="CADASTRAR"
          style={{color:"#9ccbdd"}}
          accessibilityLabel="Iniciar novo cadastro"
        />
        <Text>{this.state.validationError}</Text>
      </View>
    );
  }
}
