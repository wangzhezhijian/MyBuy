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
// 引入外部的组件类
var CommonView = require('./WDSMiddleCommonView');

// 引入外部数据
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');

var HomeMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}

                {this.renderLeftView()}

                {/*右边*/}
                <View style = {styles.rightViewStyle}>
                {this.renderRightView()}
                    </View>
            </View>
        );
    },
    // 左边的View
    renderLeftView(){
        // 拿到对应的数据
        var data = TopMiddleData.dataLeft[0];


        return (
            <TouchableOpacity onPress={()=>{alert('逗比')}}>
          <View style={styles.leftViewStyle} >
            <Image source = {{uri:data.img1}} style = {styles.leftImageStyle} />
              <Image source = {{uri:data.img2}} style = {styles.leftImageStyle} />
              <Text style ={{color:'gray'}} >{data.title}</Text>
              <View style ={{flexDirection:'row',marginTop:5}} >
                <Text style={{color:'blue',marginRight:5}} >{data.price}</Text>
                  <Text style={{color:'orange',backgroundColor:'yellow'}} >{data.sale}</Text>
              </View>

          </View>
                </TouchableOpacity>
        );
    },
    // 右边的View
    renderRightView(){
        // 组件数组
        var itemArr = [];
        var rightData = TopMiddleData.dataRight;
        // 遍历
        for (var i = 0;i< rightData.length;i++){

            var data = rightData[i];
            itemArr.push(
              <CommonView key={i}
                  title = {data.title}
                  subTitle = {data.subTitle}
                  rightImage = {data.rightImage}
                  titleColor = {data.titleColor}
                  />
            );
        }
        return itemArr;
    }
});




const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
        marginTop:10,

    },
    rightViewStyle:{
        position:'absolute',
        right:0,
        width:width*0.5-0.5,
        height:120,
    },
    leftViewStyle:{
        position:'absolute',
        left:0,
        width:width*0.5-0.5,
        height:119,
        backgroundColor:'white',
        marginRight:1,

        // 水平居中
        justifyContent:'center',
        alignItems:'center',

    },
    leftImageStyle:{
        width:120,
        height:30,
        // 内容模式
        resizeMode:'contain'
    }


});
// 输出组件类
module.exports = HomeMiddleView;


