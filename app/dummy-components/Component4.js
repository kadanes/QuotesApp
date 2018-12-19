import React, {Component} from 'react'
import {AppRegistry, Text, View, ListView } from 'react-native'

const users = ['Parth','Reeya','Rounak']

export default class Component4 extends Component {
    constructor() {
        super()
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.state = {
            userDataSource: ds.cloneWithRows(users)
        }
    }

    renderRow = (user) => {
        return(
            <View>
                <Text>{user}</Text>
            </View>
            )
    }
    render() {
        return (
        <ListView 
        dataSource={this.state.userDataSource} 
        renderRow = {this.renderRow.bind(this)}
        />
        )
    }
}

AppRegistry.registerComponent('Component4',() => Component4 )