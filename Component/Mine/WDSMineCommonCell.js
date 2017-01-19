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


var MineCell = React.createClass({

    getDefaultProps(){
      return{
          leftIconName:'',
          leftTitle:'',
          rightIconName:'',
          rightTitle:'',
      }
    },

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(this.props.leftTitle)}}>
            <View style={styles.container}>
                <View style={styles.leftViewStyle} >

                    <Image source={{uri:this.props.leftIconName}} style={styles.leftImgStyle} />

                <Text style={styles.leftTitleStyle}>
                    {this.props.leftTitle}
                </Text>
                </View>

                <View style={styles.rightViewStyle} >
                    {this.rightSubView()}
                    </View>
            </View>

                </TouchableOpacity>

        );
    },
    // 右边的内容

    rightSubView(){
        return(
            <View style={{flexDirection:'row',alignItems:'center'}} >

                {this.renderRightContent()}
                <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8,marginLeft:5}} />
            </View>
        )
    },
    // 右边具体返回的值
    renderRightContent(){
        if(this.props.rightIconName.length == 0){
            // 不返回图片
            return(
                <Text style={{color:'gray'}} >
                    {this.props.rightTitle}
                </Text>
                )
        }else{
            return(
                <Image source={{uri:this.props.rightIconName}} style={{width:24,height:13}} />
            )
        }
    }
});




const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'space-between',
        // 背景颜色
        backgroundColor:'white',
        // 垂直居中
        alignItems:'center',
        // 高度
        height:40,

        // 下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
    },
    leftViewStyle:{
        // 主轴的方向
        flexDirection:'row',
        alignItems:'center',
        // 左边边距
        marginLeft:8,

    },
    leftImgStyle:{
        width:24,
        height:24,
        marginRight:8,
        // 设置圆角
        borderRadius:12,
    },
    rightViewStyle:{

    },
    leftTitleStyle:{
        fontSize:16,
    }
});
// 输出组件类
module.exports = MineCell;


