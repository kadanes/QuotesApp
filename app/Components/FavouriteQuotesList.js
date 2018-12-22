import React, {Component} from 'react'
import {View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableHighlight} from 'react-native'
import { connect } from 'react-redux'
import { SafeAreaView } from 'react-navigation'
import FavouriteQuoteCell from './FavouriteQuoteCell'
import {getFavouriteQuotes} from '../Reducer/Quotes'

export class FavouriteQuotesList extends Component {
    
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
                    <View style={{width: '100%', height: '100%'}}>
                        <FlatList
                        style= {{flex:1, width: '100%'}}
                        data= {this.props.favouritesCombi}
                        renderItem = {({item}) => this.renderItem(item,this.props.navigation)}
                        keyIterator = {(item,index) => index}
                        />  
                    </View>
                </SafeAreaView>       
            )
        }
    }

    renderItem(item,navigation) {
        return (
            <FavouriteQuoteCell 
                navigation={navigation} 
                item={item}
            />
        )
    }    
}

const mapStateToProps = (state) => ({
        loading: state.favouritesLoading,
        favouritesCombi: getFavouriteQuotes(state)
    })


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default connect(mapStateToProps)(FavouriteQuotesList)

