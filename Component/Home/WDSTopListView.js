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
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
/// 全局的变量
var cols = 5;
var W = (width)/5
var cellWidth = Platform.OS =='ios'?W:60;
var vMargin = (width-cellWidth*cols)/(cols+1);


var TopListView = React.createClass({

    getDefaultProps(){
      return{
          dataArr:[]
      }
    },

    getInitialState(){
      // 创建数据源
        var ds =new ListView.DataSource({rowHasChanged:(row1,row2)=>row1 !==row2});

        return{
            dataSource:ds.cloneWithRows(this.props.dataArr)
        }
    },

    render() {
        return (

            <ListView
                scrollEnabled = {false}
                contentContainerStyle={styles.contentViewStyle}
                dataSource={this.state.dataSource}

                renderRow={this.renderRow}
                />

        );
    },
    //具体的cell
    renderRow(rowdata){
        return(
            <TouchableOpacity style={styles.cellStyle}>
            <View  style={styles.cellStyle}>
                <Image source={{uri:rowdata.image}} style={{width:52,height:52}} />
                <Text style={styles.titleStyle}>{rowdata.title}</Text>
            </View>
                </TouchableOpacity>
        );
    }
});




const styles = StyleSheet.create({

    contentViewStyle:{
        // 多个cell在同一行显示
        flexDirection:'row',
        flexWrap:'wrap',
        //宽度
        width:width,
        height:180,

    },

    cellStyle:{

        width:cellWidth,
        height:Platform.OS =='ios'?70:80,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMargin

    },
    titleStyle:{
        fontSize:Platform.OS == 'ios'?12:12
    }
});
// 输出组件类
module.exports = TopListView;


