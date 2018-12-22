import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const FavouriteQuoteCell = (props) => {
    return (
        <TouchableHighlight   
            onPress={() => props.navigation.navigate('Quotes',{id: props.item.parentId, category: props.item.category})}
            style={styles.TableCell}
        >
        <View>
            <Text style={styles.Quote}>{props.item.text}</Text>
            <Text style={styles.Author}>-- {props.item.person}</Text>
            <View style={styles.CategoryPill}>
                <Text style={styles.Category}>
                    {props.item.category}
                </Text>
            </View> 
        </View>
        
        </TouchableHighlight> 
    )
}

export default FavouriteQuoteCell

const styles = StyleSheet.create({
    TableCell: {
        backgroundColor: '#ff6347',
        margin:5,
        padding: 5,
        justifyContent: 'space-around',
        flexDirection: 'column',
        flex: 1 ,
        padding: 10,
        margin: 5,
        borderRadius: 15, 
    },
    "Quote": {
        fontWeight: 'bold',
        color: 'white'
    },
    "Author": {
        fontWeight:'200',
        color:'white',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 20
    }, 
    Category: {
        color: '#ff6347',
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'capitalize',
        margin: 'auto'
    },
    CategoryPill: {
        marginTop: 10,
        padding: 2,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        width: 100, 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'    
    }
})