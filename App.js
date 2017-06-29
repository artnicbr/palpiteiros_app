import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Palpiteiros from './components/Palpiteiros';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Palpiteiros />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
});
