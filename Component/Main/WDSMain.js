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
    Platform,// 判断当前运行的系统
    Navigator,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
var Home = require('../Home/WDSHome');
var Mine = require('../Mine/WDSMine');
var More = require('../More/WDSMore');
var Shop = require('../Shop/WDSShop');

var Main = React.createClass({

    getInitialState(){
        return{
            selectedTab:'Home'
        }
    },
    render() {

        return (
            <TabNavigator>


                {
                    this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','Home','首页',Home,'10')
                }
                {
                    this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','Shop','商家',Shop)
                }
                {
                this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','Mine','我的',Mine)
                 }
                {
                    this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','More','更多',More)
                }

            </TabNavigator>

        );
    },
    // 每一个TabBarItem
    renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName,component,badgeText){
        return(
            <TabNavigator.Item
                title={title}// 传递变量加大括号
                renderIcon={() => <Image source={{uri:iconName}} style = {styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:selectedIconName}} style = {styles.iconStyle} />}
                onPress={() => {this.setState({ selectedTab: selectedTab })}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText={badgeText}


                >
                <Navigator
                    initialRoute = {{name:componentName,component:component}}
                    configureScene={()=>{return Navigator.SceneConfigs.PushFromRight}}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator} />;

                        }}
                    />
            </TabNavigator.Item>
        )
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
    iconStyle:{
      width:  Platform.OS == 'ios' ?  30 :25,
        height: Platform.OS == 'ios' ?  30 :25,
    },
    selectedTitleStyle:{
        color:'orange'
    }
});
// 输出组件类
module.exports = Main;

