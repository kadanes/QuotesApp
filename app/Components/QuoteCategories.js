import React, {Component} from 'react'
import {TouchableOpacity, Button, Text, View, FlatList, StyleSheet, ActivityIndicator} from 'react-native'
import CategoryCell from '../Components/CategoryCell'
import { connect } from 'react-redux'


class QuotesCategories extends Component {

    static navigationOptions = {
        title: 'Categories',
        headerRight: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          )
    }

    render() {

        if (this.props.error == true) {
            return(
                <View style={styles.Container}>
                    <Text style={{color: 'red'}}>FAILED TO LOAD DATA</Text>
                    <Button 
                        title='Reload'
                        onPress={this.makeRemoteRequest}
                    />
                </View>
            )
        } else if (this.props.loading) {
            return(
                <View style={styles.Container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        } else if (!this.props.loading && !this.props.error) {
            return (
                <View style={styles.Container}>
                    <FlatList
                    style= {{flex:1, width: '100%'}}
                    data= {this.props.data}
                    renderItem = {({item,index}) => {
                        return (
                            
                            <TouchableOpacity 
                                onPress={() => this.props.navigation.navigate('Quotes',{quotes: item.quotes, id: index, category: item.category})}
                            >
                         
                                <CategoryCell Category={item}/>
          
                            </TouchableOpacity>  
                        )
                    }}
                    keyIterator = {(item,index) => index}
                    />  
                
                </View>
                   
            )
        }
            
    }    
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const mapStateToProps = (state,props) => {
    return {
        loading: state.loading,
        error: state.error,
        data: state.data
    }
}
export default connect(mapStateToProps)(QuotesCategories)
