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
    ScrollView,
    TouchableOpacity
} from 'react-native';
var Home_D5 = require('../../LocalData/XMG_Home_D5.json');
var CommonCell = require('./WDSBottomCommonCell');
var ShopCenter = React.createClass({

    getDefaultProps(){
      // 回调函数
        return{
            popToHomeView:null
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <CommonCell
                    leftIcon = 'gw'
                    leftTitle = "购物中心"
                    rightTitle = {Home_D5.tips}
                    />
                {/*下部分*/}
                <ScrollView style = {styles.scrollViewStyle}
                    horizontal = {true}// 横向
                    >
                    {this.renderAllItem()}
                    </ScrollView>
            </View>
        );
    },
    renderAllItem(){
        // 定义一个组件数组
        var itemArray = [];
        // 取出数据
        var shopData = Home_D5.data;
        // 遍历
        for (var i = 0; i < shopData.length; i++) {
            // 取出单个数据
            var data = shopData[i];
            // 创建组件装入数组
            itemArray.push(
                <ShopCenterItem
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailurl = {data.detailurl}
                    key={i}
                    popTopShopCenter = {(url)=>this.popToHome(url)}
                    />
            )

        }
        return itemArray;
    },
    popToHome(url){
        if(this.props.popToHomeView==null)return;
        // 执行回调函数
        this.props.popToHomeView(url)
    }
});

var ShopCenterItem = React.createClass({
   getDefaultProps(){
       return{
           shopImage:'',
           shopSale:'',
           shopName:'',
           detailurl:'',
           popTopShopCenter:null
       }
   } ,
    render(){
        return (
            <TouchableOpacity onPress={()=>this.clickItem(this.props.detailurl)}>
                <View style = {styles.itemViewstyle} >
                    <Image source={{uri:this.props.shopImage}}  style={styles.imageStyle} />
                    <Text style = {styles.shopSaleStyle} >{this.props.shopSale}</Text>
                    <Text style = {styles.shopNameStyle} >{this.props.shopName}</Text>
                    </View>
                </TouchableOpacity>
        );
    },
    clickItem(detailurl){
        //
        if(this.props.detailurl==null)return;
        // 执行回调函数
        this.props.popTopShopCenter(detailurl);
    }
});


const styles = StyleSheet.create({
    container: {

      marginTop:10,
    },
    imageStyle:{
        width:120,
        height:80,
        borderRadius:8
    },
    scrollViewStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10
    },
    itemViewstyle:{
      margin:8,
    },
    shopSaleStyle:{
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'orange',
        color:'yellow',
        padding:3,
        borderTopRightRadius:8
    },
    shopNameStyle:{
        textAlign:'center',
        marginTop:5
    },
});
// 输出组件类
module.exports = ShopCenter;



