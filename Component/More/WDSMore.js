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
    Platform,
    TouchableOpacity,
    ScrollView
} from 'react-native';

var CommonCell = require('./WDSCommonCell')
var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>

                {this.renderNavBar()}

               <ScrollView>
                   <View style={{marginTop:20}} >
                    <CommonCell
                        title = '扫一扫'
                        isSwitch={false}
                        />
                   </View>
                   <View style={{marginTop:20}} >
                       <CommonCell
                           title = '省流量模式'
                           isSwitch={true}
                           />
                       <CommonCell
                           title = '消息提醒'
                           isSwitch={false}
                           />
                       <CommonCell
                           title = '邀请好友使用玩转电商'
                           isSwitch={false}
                           />
                       <CommonCell
                           title = '清空缓存'
                           isSwitch={false}
                           rightTitle='1.99M'
                           />
                   </View>
                   <View style={{marginTop:20}} >
                       <CommonCell
                           title = '意见反馈'
                           isSwitch={false}
                           />
                       <CommonCell
                           title = '问卷调查'
                           isSwitch={false}
                           />
                       <CommonCell
                           title = '支付帮助'
                           isSwitch={false}
                           />
                       <CommonCell
                           title = '网络诊断'
                           isSwitch={false}
                           />
                       <CommonCell
                           title = '关于玩转'
                           isSwitch={false}
                           />
                       <CommonCell
                           title = '我要应聘'
                           isSwitch={false}
                           />

                   </View>

                   <View style={{marginTop:20}} >
                       <CommonCell
                           title = '精品应用'
                           isSwitch={false}
                           />



                   </View>
                   </ScrollView>

            </View>
        );
    },
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle} >
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}} >更多</Text>
                <TouchableOpacity onPress={()=>{alert('点击了')}} style={styles.rightViewStyle} >
                <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle} />
                    </TouchableOpacity>
            </View>
        )
    }
});




const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#e8e8e8',
    },

    navImageStyle:{
        width:Platform.OS == 'ios' ? 28:24,
        height:Platform.OS == 'ios' ? 28:24,


    },
    rightViewStyle:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:10,
    },
    navOutViewStyle:{
        height:Platform.OS == 'ios'?64:44,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    }
});
// 输出组件类
module.exports = More;

