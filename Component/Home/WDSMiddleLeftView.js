/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var MiddleLeftView = React.createClass({

    getDefaultProps(){
        return {
            img1: '',
            img2: '',
            title: '',
            price: '',
            sale: '',
        }
    },

    render() {
        return (
            <TouchableOpacity>
            <View style={styles.container}>
                {/*内容模式*/}
                    <Image source={{uri:this.props.img1}}  style = {{width:75,height:25,resizeMode:'contain',marginTop:3}} />
                    <Image source={{uri:this.props.img2}}  style = {{width:64,height:42}} />
                    <Text style={styles.titleNameStyle}>{this.props.title}</Text>
                    <View style = {styles.priceSaleStyle}>
                    <Text style={styles.titlePriceStyle}>{this.props.price}</Text>
                    <Text style={styles.titleSaleStyle}>{this.props.sale}</Text>
                    </View>


            </View>
                </TouchableOpacity>
        );
    }
});




const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

        height:119,
        width:width*0.5
    },
    titleNameStyle:{
        fontSize:18,
        fontWeight:'bold',
        color:'gray',
    },
    priceSaleStyle:{
        marginTop:9,
        flexDirection:'row',


    },
    titlePriceStyle:{
        fontWeight:'bold',
        color:'green',
        marginBottom:5,
    },
    titleSaleStyle:{
        fontSize:16,
        fontWeight:'bold',
        backgroundColor:'yellow',
        color:'orange',
        borderRadius:10,
        marginLeft:3,
        marginBottom:5,
    },

});
// 输出组件类
module.exports = MiddleLeftView;


