import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export class BlueButton extends Component {
  render() {
    return (
        <Button color="blue" title="Click "></Button>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 200, width: "50%"}}>
        <BlueButton/>
        <Text>My React Component</Text>
      </View>
    );
  }
}
