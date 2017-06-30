import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Palpiteiros from './components/Palpiteiros';

export default class App extends React.Component {
  render() {
    return (        
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Image            
            style={{heigt: 200}}
            source={require('./img/polvo_400x400.jpg')}
          />
        </View>
        <View style={{flex:1, flexDirection: 'row', alignItems : 'flex-end'}}>
          <View style={{flex:1}}>
            <Button
              onPress={(btn) => {console.log("Cadastrar!");}}
              title="Cadastrar"
              color="#00f"
              accessibilityLabel="Cadastre-se"
            />
          </View>
          <View style={{flex:1}}>
            <Button
              onPress={(btn) => {console.log("Entrar!");}}
              title="Entrar"
              color="#0f0"
              accessibilityLabel="Cadastre-se"            
            />
          </View>
          <View style={{flex:1}}>
            <Button
              onPress={(btn) => {console.log("Sair!");}}
              title="Sair"
              color="#f00"
              accessibilityLabel="Cadastre-se"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
  },
});
