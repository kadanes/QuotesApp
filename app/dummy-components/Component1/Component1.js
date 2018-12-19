import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'

export default class Component1 extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: ' Brad',
            message: this.props.message
        }
    }

    static defaultProps = {
        message: "Hey there"
    }
  render() { 
      console.log("Hello")
    return (
      <View>
        <Text>{this.state.message}</Text>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('Component1',() => Component1)