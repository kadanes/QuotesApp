import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'

export default class Component2 extends Component {

    onPress = () => {
        console.log('Area pressed')
    }

  render() {
    return (
      <View style={styles.myView}>
        <Text style={{color: 'red'}}>Hello from component 2</Text>

        <View style={styles.container}>
        <TouchableHighlight onPress={this.onPress} underlayColor='blue'>
            <View style={styles.v1}>
                <Text>View 1</Text>
            </View>
        </TouchableHighlight>
            
        <TouchableOpacity>
            <View style={styles.v1}>
                <Text> View 2</Text>
            </View> 
        </TouchableOpacity>
          
            <View style={styles.v1}>
                <Text>3</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'blue'
    },
    container: {
        marginTop: 20,
        flexDirection: 'row',
        'height': 100
    },
    v1: {
        flex: 1,
        backgroundColor: 'pink'
    }
})

AppRegistry.registerComponent('Component2',() => Component2)