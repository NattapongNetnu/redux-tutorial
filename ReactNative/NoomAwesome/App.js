import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Button
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'No one press me'
    };
  }
  handlePress = (value) => {
    this.setState({ text: `Btn ${value} Pressed` });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnbar}>
          <Button title="button 1" onPress={() => this.handlePress(1)} />
          <Button title="button 2" onPress={() => this.handlePress(2)} />
          <Button title="button 3" onPress={() => this.handlePress(3)} />
          <Button title="button 4" onPress={() => this.handlePress(4)} />
        </View>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 25 : 0,
    backgroundColor: 'pink',
    flexDirection: 'column',
    flex: 1
  },
  btnbar: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
