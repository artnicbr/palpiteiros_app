import React from 'react';
import { Text, TextInput, Image, View, Button } from 'react-native';
import Estilos from '../Styles/Form.js';

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.loginRequest = this.loginRequest.bind(this);
  }

  loginRequest() {
      console.log('login');
  }

  render() {
      const { navigate } = this.props.navigation;
      return(
        <View style={{flex:1, flexDirection : 'column', padding: 10, marginTop: 25, justifyContent: 'flex-end'}}>
            <Image            
            style={{flex: 1, alignSelf: 'center', aspectRatio: 1, resizeMode: 'stretch'}}
            source={require('../img/ball.jpg')}
            />
            <Text style={{fontSize: 54, alignSelf: 'center'}}>
                Bem-vindo!
            </Text>
            <TextInput
                placeholder='Login'
                keyboardType='email-address'
                returnKeyType='next'
                underlineColorAndroid='transparent'
                style={Estilos.textinput}
            ></TextInput>
            <TextInput
                placeholder='Senha'
                keyboardType='default'
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                style={Estilos.textinput}
            ></TextInput>        
            <Button
                onPress={this.loginRequest}
                title="ENTRAR"
                color="#841584"
                accessibilityLabel="Acessar o sistema"
            />
            <Button
                onPress={() => navigate('Register')}
                title="CADASTRAR"
                style={{color:"#9ccbdd"}}
                accessibilityLabel="Iniciar novo cadastro"
            />
        </View>
    );
  }
}