import React, {Component} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native' 
import { connect } from 'react-redux'
import { watchSaveQuote, watchUnsaveQuote } from '../actions/Quotes'
import Ionicons from 'react-native-vector-icons/Ionicons'

class QuotesList extends Component {

    static navigationOptions = ({ navigation }) => {
        category = navigation.getParam('category', 'Quotes')
        return {
        title: category.charAt(0).toUpperCase() + category.slice(1),
        }
    };

    setModalVisible = (isVisible) => {
        this.setState = () => ({modalVisible: isVisible})
    }

    render() {
       
        const { navigation } = this.props
        const parentId = navigation.getParam('id','nil')

        const quotes = this.props.quotes[parentId].quotes

        return (
            <View style={styles.Container}>
                    <FlatList 
                    style= {{flex:1, width: '100%'}}
                    data= {quotes}
                    renderItem = {({item,index}) => {
                        return (
                            <View style={styles.TableCell}  key={index}>
                                
                            <View style={{flex:1,flexDirection:'row', alignItems: 'center'}}>
                            <View style={{flex:1,flexDirection:'column', justifyContent: 'space-between'}}>
                                <Text style={styles.Quote}>{item.text}</Text>
                                <Text style={styles.Author}>-- {item.person}</Text>
                            </View>
                            
                            {  
                                this.props.favourites.includes(`${parentId}_${index}`) ?
                                <TouchableOpacity onPress={() => {
                                    this.props.unsave(parentId,index)
                                }}>  
                                    <Ionicons name='ios-remove-circle' style={styles.Button}/> 
                                </TouchableOpacity>:
                                <TouchableOpacity  onPress={() => {
                                    
                                    this.props.save(parentId,index)
                                    this.props.navigation.navigate('Favourites')
                                }}> 
                                    <Ionicons name='ios-add-circle' style={styles.Button}/>
                                </TouchableOpacity> 
                            }
                            
                            </View>
                                
                               
                            </View>
                        )
                    }}
                    keyIterator = {(item,index) => index}
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
    },
    TableCell: {
        backgroundColor: '#ff6347',
        margin:5,
        padding: 20,
        borderRadius: 15
     
    },
    "Quote": {
        fontWeight: 'bold',
        color: 'white'
    },
    "Author": {
        fontWeight:'200',
        color:'white',
        height: 20, 
        marginTop: 10  
    },
    "Button": {
        color: "#DCDCDC",
        fontWeight:'700',
        fontSize: 30
    }
})

const matchStateToProps = (state) =>{ 
    console.log("Quote list: ",state)
    return {
        favourites: state.favourites,
        quotes: state.data
    }
}

const matchDisptachToProps = (dispatch) => ({
    save : (parentId, id) => {
        dispatch(watchSaveQuote(parentId,id))
    },
    unsave : (parentId, id) => {
        dispatch(watchUnsaveQuote(parentId,id))
    }

})

export default connect(matchStateToProps,matchDisptachToProps)(QuotesList)