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
    ScrollView,
    ListView,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var TopListView = require('./WDSTopListView');
// 引入外部的json
var TopMenu = require('../../LocalData/TopMenu.json');
var TopView = React.createClass({
    getInitialState(){
      return{
          activePage:0,
      }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}
                    >
                    {this.renderScrollItem()}
                    </ScrollView>

                {/*页码部分*/}
                <View style={styles.indicatorViewStyle} >
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },
    // 当一帧滚动结束时调用
    onScrollAnimationEnd(e){
      // 求出当前的页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);

        // 更新状态机，
        this.setState({
           activePage:currentPage
        });
    },

    // scrollView 内部的组件
    renderScrollItem(){
        // 组件数组
        var itemArr = [];
        // 数据数组
        var dataArr = TopMenu.data;
        for(var i =0;i<dataArr.length;i++){
            itemArr.push(
                //<View key={i} style={{backgroundColor:colorArr[i],width:width,height:120}}>
                //
                //    <Text>{i}</Text>
                //    </View>
                <TopListView key={i}
                    dataArr = {dataArr[i]}
                    />
            );
        }
        // 返回组件数组
        return itemArr;
    },
    //页码指示器
    renderIndicator(){
        //指示器数组
        var indicatorArr = [],style;
        // 遍历创建组件
        for(var i =0;i<2;i++){
            // 设置圆点的样式
            style = (i == this.state.activePage) ?{color:'orange'}:{color:'gray'}
            indicatorArr.push(
              <Text key={i} style={[{fontSize:25},style]} >&bull;</Text>
            );
        }
        return indicatorArr;
    }
});




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    indicatorViewStyle:{
      flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
});
// 输出组件类
module.exports = TopView;


