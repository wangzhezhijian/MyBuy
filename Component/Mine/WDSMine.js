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
} from 'react-native';

var MineCell = require('./WDSMineCommonCell');
var MineMiddleView = require('./WDSMineMiddleView');
var MineHeaderView = require('./WDSMineHeaderView');
var Mine = React.createClass({
    render() {
        return (
            <ScrollView
                style = {styles.scrollViewStyle}
                contentInset = {{top:-200}}
                contentOffset={{y:200}}
                >
                <View>

                    <MineHeaderView/>
                </View>

                <View >
                    <MineCell
                        leftIconName='collect'
                        leftTitle='我的订单'
                        rightTitle='查看我的全部订单'

                        />
                    <MineMiddleView/>
                </View>
            <View style={{marginTop:20}}>
                <MineCell
                    leftIconName='draft'
                    leftTitle='我的钱包'
                    rightTitle='账户余额：¥2000000000'
                    />
                <MineCell
                    leftIconName='like'
                    leftTitle='抵用券'
                    rightTitle='10张'
                    />

            </View>
                <View style={{marginTop:20}}>
                <MineCell
                    leftIconName='card'
                    leftTitle='积分商城'

                    />
                </View>
                <View style={{marginTop:20}}>
                <MineCell
                    leftIconName='new_friend'
                    leftTitle='今日推荐'
                    rightIconName='me_new'
                    />
                </View>
                <View style={{marginTop:20}}>
                <MineCell
                    leftIconName='pay'
                    leftTitle='我要合作'
                    rightTitle='轻松开店，招财进宝'
                    />
                </View>
            </ScrollView>
        );
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
    scrollViewStyle:{
        backgroundColor:'#e8e8e8',

    }
});
// 输出组件类
module.exports = Mine;

