import React, {Component} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native' 
import { connect } from 'react-redux'
import { watchSaveQuote, watchUnsaveQuote } from '../actions/Quotes'
import QuoteCell from '../Components/QuoteCell'

export class QuotesList extends Component {

    static navigationOptions = ({ navigation }) => {
        category = navigation.getParam('category', 'Quotes')
        return {
        title: category.charAt(0).toUpperCase() + category.slice(1),
        }
    };

    render() {
       
        const { navigation } = this.props
        const parentId = navigation.getParam('id','nil')

        const quotes = this.props.quotes[parentId].quotes

        return (
            <View style={styles.Container}>
                    <FlatList 
                    style= {{flex:1, width: '100%'}}
                    data= {quotes}
                    renderItem = {({item,index}) => 
                         <QuoteCell
                               quote={item}
                               parentId={parentId}
                               index={index}     
                        />
                    }
                    keyIterator = {(_,index) => index}
                    />  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const matchStateToProps = (state) => ({ 

        favourites: state.favourites,
        quotes: state.data
    
})

export default connect(matchStateToProps)(QuotesList)