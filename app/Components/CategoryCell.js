import React, {Component} from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export default class CategoryCell extends Component {
    render() {
        return (
            <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Quotes',{ id: this.props.id})}
            >
                <View style={styles.Container}>
                    <View style={styles.CategoryHeader}>
                        <Text style={styles.Category}> {this.props.Category.category} </Text>
                        <Text style={styles.QuotesCount}>{this.props.Category.quotes.length} </Text>
                    </View>
                    <View style={styles.AuthorBlock}>
                        {this.props.Category.quotes.map(item => <Text style={styles.Author}> {item.person}</Text>)}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
        margin: 10,
        padding: 10 ,
        backgroundColor: '#ff6347',
        borderRadius: 15,
        flex: 1
    },
    CategoryHeader: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        
    },
    AuthorBlock: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 5
    },
    Category: {
        textTransform: 'capitalize',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    QuotesCount: {
        color: 'white',
        fontWeight: '600',
        fontSize: 12
    },
    Author: {
        color: '#E0E0E0',
        fontSize: 14
    }
})
