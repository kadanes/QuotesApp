import React, {Component} from 'react'
import {View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableHighlight} from 'react-native'
import { connect } from 'react-redux'
import { SafeAreaView } from 'react-navigation';

class FavouriteQuotesList extends Component {

    static navigationOptions = {
        title: 'Favourites'
    }

    render() {
        
        if (this.props.loading) {
            return(
                <View style={styles.Container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        } else if (!this.props.loading) {
            return (

                <SafeAreaView style={styles.Container}>

                    <View>
                    <FlatList
                    style= {{flex:1}}
                    data= {this.props.favourites}

                    renderItem = {({item: quoteId}) => {
                    
                        var [parentId, id] = quoteId.split('_')
                        item = this.props.quotes[parentId].quotes[id]
                        
                        category = this.props.quotes[parentId].category

                        return (
                            
                            <TouchableHighlight   
                                onPress={() => this.props.navigation.navigate('Quotes',{quotes: this.props.quotes[parentId].quotes, id: parentId, category: this.props.quotes[parentId].category})}
                                style={styles.TableCell}
                            >
                        
                            <View >
                                <Text style={styles.Quote}>{item.text}</Text>
                                <Text style={styles.Author}>-- {item.person}</Text>
                                <View style={styles.CategoryPill}>
                                    <Text style={styles.Category}>
                                        {category}
                                    </Text>
                                </View> 
                            </View>
        
                            </TouchableHighlight>  
                        )
                        
                    }}
                    keyIterator = {(item,index) => index}
                    />  
                </View>

                </SafeAreaView>
                
                   
            )
        }
    }
}


mapStateToProps = (state) => ({
    quotes: state.data,
    favourites: state.favourites,
    loading: state.favouritesLoading
})

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TableCell: {
        backgroundColor: '#ff6347',
        margin:5,
        padding: 20,
        justifyContent: 'space-around',
        flexDirection: 'column',
        flex: 1 ,
        borderRadius: 15  
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

export default connect(mapStateToProps)(FavouriteQuotesList)

