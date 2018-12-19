import React, {Component} from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

export default class ConfirmFavourite extends Component {

    render() {
        return (
            <View style={styles.modalContainer}>
                <Text>
                    Save quote? 
                </Text>
                <Button
                    title = 'Close'
                    onPress = {() => this.props.navigation.navigate('Favourites')} 
                />
            </View>
        )
       
    }

}

const styles = StyleSheet.create({
    modalContainer: {
        height: 300,
        width: 300,
        borderWidth: 2,
        borderColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
    }
})