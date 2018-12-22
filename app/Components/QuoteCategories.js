import React, {Component} from 'react'
import {Button, Text, View, FlatList, StyleSheet, ActivityIndicator} from 'react-native'
import CategoryCell from '../Components/CategoryCell'
import { connect } from 'react-redux'
import { fetchQuotes } from '../actions/Quotes'

export class QuoteCategories extends Component {

    static navigationOptions = {
        title: 'Categories',
    }

    render() {
        
    return this.props.error ? (
            <View style={styles.Container}>
                <Text style={{color: 'red'}}>FAILED TO LOAD DATA</Text>
                <Button 
                    title='Reload'
                    onPress={this.props.fetchQuotes}
                />
            </View>
        ) : this.props.loading ? (
            <View style={styles.Container}>
                <ActivityIndicator size="large"/>
            </View>
        ) : (
            <View style={styles.Container}>
                <FlatList
                style= {{flex:1, width: '100%'}}
                data= {this.props.data}
                renderItem = {({item,index}) => {
                    return (
                        <CategoryCell Category={item} navigation={this.props.navigation} id={index}/>
                    )
                }}
                keyExtractor = {(item) => item.category}
                />  
                <Text>Additions</Text>
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

export const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        data: state.data
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuotes: () => {
            dispatch(fetchQuotes())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuoteCategories)
