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
var CommonView = React.createClass({

    getDefaultProps(){
      return{
          title:'',
          subTitle:'',
          rightImage:'',
          titleColor:'',
          tplurl:'',//下级界面url
          // 回调函数
          callBackClickCell:null,
      }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>{this.clickCell(this.props.tplurl)}} style={styles.container}>

                <View>
                <Text style={[styles.topTitleStyle,{color:this.props.titleColor}]}>
                    {this.props.title}
                </Text>
                <Text style={styles.bottomTitleStyle}>
                    {this.props.subTitle}
                </Text>
                </View>
                <Image source={{uri:this.props.rightImage}}  style={{width:64,height:43,resizeMode:'contain'}} />

                </TouchableOpacity>
        );
    },
    clickCell(data){

        // 判断处理
        if(this.props.callBackClickCell == null)return;
        // 执行回调函数
        this.props.callBackClickCell(data);

    }
});




const styles = StyleSheet.create({
    container: {

        flexDirection:'row',

        backgroundColor: 'white',
        width: width*0.5-1,
        marginRight:1,

        height:59,
        marginBottom:1,
        alignItems:'center',
        justifyContent:'space-around',


    },

    topTitleStyle:{
            fontSize:18,
        fontWeight:'bold'

    },
    bottomTitleStyle:{
        color:'gray',
        marginTop:5
    }
});
// 输出组件类
module.exports = CommonView;


