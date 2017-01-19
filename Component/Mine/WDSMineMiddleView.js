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
// 导入外部的json数据
var  MiddleData = require('./MiddleData.json');
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var MineMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
                <InnerView  />
            </View>
        );
    },
    renderAllItem(){
        // 定义一个组件数组
        var itemArr = [];
        // 遍历
        for (var i = 0;i<MiddleData.length;i++){
            // 取出单独的数据
            var data = MiddleData[i];
            // 创建组件装入数组
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title} />
            );
        }
        return itemArr;
    }
});
var InnerView = React.createClass({

    getDefaultProps(){
      return{
          iconName:'',
          title:'',
      }
    },
    render() {
        return (
            <View style={styles.SignalViewStyle}>
                <Image source={{uri:this.props.iconName}} style={{width:30,height:20,marginBottom:3}}/>
                <Text>
                    {this.props.title}
                    </Text>

            </View>
        );
    }
});



const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    SignalViewStyle:{
        width:width/4,

        height:60,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
// 输出组件类
module.exports = MineMiddleView;


