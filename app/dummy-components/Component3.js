import React, {Component} from 'react'
import {AppRegistry, Text, View, TextInput } from 'react-native'


export default class Component3 extends Component {
    constructor() {
        super()
        this.state = {
            textValue: "Hello"
        }
    }

    onChangeText = (value) => {
        this.setState({
            textValue: value
        })
    }
  render() {
    return (
      <View>
      <Text>Component 3</Text>
      <Text>Component 3</Text>
        <Text>Component 3</Text>
        <TextInput
            placeholder="Enter text"
            value= {this.state.textValue}
            onChangeText = {(value) => this.onChangeText(value)}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('Component3 ',() => Component3 )