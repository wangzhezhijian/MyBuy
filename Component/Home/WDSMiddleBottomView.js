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
    View
} from 'react-native';

var Home_D4 = require('../../LocalData/XMG_Home_D4.json');
// 引入外部的组件类
var CommonView = require('./WDSMiddleCommonView');
var MiddleBottomView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}></View>

                {/*下部分*/}

                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },
    // 下半部分的所有组件
    renderBottomItem(){
        // 组件数组
        var itemArr = [];
        //拿到对应的数据
        var dataArr = Home_D4.data;
        // 遍历
        for(var i = 0;i<dataArr.length;i++){
            // 取出单独的数据
            var itemData = dataArr[i];
            // 创建组件，装入数组
            itemArr.push(
                <CommonView
                    title = {itemData.maintitle}
                    subTitle = {itemData.deputytitle}
                    rightImage = {this.dealWithImgUrl(itemData.imageurl)}
                    titleColor = {itemData.typeface_color}
                    key = {i+10}
                    tplurl = {itemData.tplurl}
                    callBackClickCell = {(data)=>this.popToTopView(data)}
                    />
            );
        }
        return itemArr;
    },

    // 继续往父级界面传递数据
    popToTopView(data){
      // 继续执行回调函数
        this.props.popTopHome(data);
    },

    dealWithImgUrl(url){
        if(url.search('w.h') == -1){
            // 没有找到正常返回
            return url;
        }else{
            return url.replace('w.h','120.90');
            //url.replaceData('w.h','120.90')
        }
    }
});




const styles = StyleSheet.create({
    container: {

        marginTop:120,




    },

    bottomViewStyle:{

        flexDirection:'row',
        flexWrap:'wrap',
    }



});
// 输出组件类
module.exports = MiddleBottomView;


