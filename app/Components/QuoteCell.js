import React,{Component} from 'react'
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { watchSaveQuote, watchUnsaveQuote } from '../actions/Quotes'

export class QuoteCell extends Component {
    render() {

        return (
            <View style={styles.TableCell}  key={this.props.index}>
                <View style={{flex:1,flexDirection:'row', alignItems: 'center'}}>
                    <View style={{flex:1,flexDirection:'column', justifyContent: 'space-between'}}>
                        <Text style={styles.Quote}>{this.props.quote.text}</Text>
                        <Text style={styles.Author}>-- {this.props.quote.person}</Text>
                    </View>
                    
                    {  
                        this.props.favourites.includes(`${this.props.parentId}_${this.props.index}`) ?
                        <TouchableOpacity onPress={() => {
                            this.props.unsave(this.props.parentId,this.props.index)
                        }}>  
                            <Ionicons name='ios-remove-circle' style={styles.Button}/> 
                        </TouchableOpacity>:
                        <TouchableOpacity  onPress={() => {
                            
                            this.props.save(this.props.parentId,this.props.index)
                        }}> 
                            <Ionicons name='ios-add-circle' style={styles.Button}/>
                        </TouchableOpacity> 
                    }
                
                </View>
            </View>

        )
            
    }
}

const matchStateToProps = (state) =>{ 
    console.log("Quote list: ",state)
    return {
        favourites: state.favourites
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

export default connect(matchStateToProps,matchDisptachToProps)(QuoteCell)


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