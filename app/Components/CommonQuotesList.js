import React, { Component} from 'react'
import { FlatList, View, Text } from 'react-native'
import { connect } from 'react-redux'

class CommonQuotesList extends Component {

    render () {
        return (
            <View style={styles.Container}>
                    <Text>{parentId}</Text>
                    <FlatList
                    style= {{flex:1}}
                    data= {quotes}
                    renderItem = {({item,index}) => {
                        console.log("Row: ",item.text,this.props.favourites.includes(`${parentId}_${index}`))
                        return (
                            <View >
                                
                                <Text>{item.text}</Text>
                                <Text>-- {item.person}</Text>
                                {  
                                    this.props.favourites.includes(`${parentId}_${index}`) ?
                                    <Button onPress={() => this.props.unsave(parentId,index)} title={'UnFavourite'}/ >:
                                    <Button onPress={() => this.props.save(parentId,index)} title={'Favourite'}/ > 
                                }
                                
                            </View>
                        )
                    }}
                    keyIterator = {(item,index) => index}
                    />  
            </View>
        )
    }
}