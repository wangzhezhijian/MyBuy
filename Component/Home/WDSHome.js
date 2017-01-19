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
    TouchableOpacity,
    Navigator,
    TextInput,
    Image,
    Platform,
    ScrollView


} from 'react-native';
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
//导入外部组件类
var HomeDetail = require('./WDSHomeDetail');
var TopView = require('./WDSTopView');
var HomeMiddleView = require('./WDSHomeMiddleView');
var MiddleBottomView = require('./WDSMiddleBottomView');
var ShopCenter = require('./WDSShopCenter');
var ShopCenterDetail = require('./WDSShopCenterDetail');
var GeustYouLike = require('./WDSGeustYouLike');
var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>

                {this.renderNavBar()}
                {/* <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
                <Text style={styles.welcome}>
                   首页
                </Text>

                    </TouchableOpacity>
                 */}


                {/*首页的主要内容*/}
                <ScrollView style = {styles.scrollViewStyle} >
                    {/*头部的View*/}

                    <TopView />


                    {/*中间的内容*/}

                    <HomeMiddleView />


                    {/*中下部分*/}

                    <MiddleBottomView  popTopHome ={(data)=>{this.pushToDetail(data)}} />

                    {/*购物中心*/}
                    <ShopCenter
                        popToHomeView= {(url)=>this.pushToShopCenterDetail(url)}
                        />

                    <GeustYouLike />
                </ScrollView>
            </View>
        );
    },
    //首页的导航条
    renderNavBar(){
      return(
          <View style = {styles.navBarStyle} >
              <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <Text style={styles.navTextStyle}  >广州</Text>
                  </TouchableOpacity>
              <TextInput
                  placeholder="输入商家，品类，商圈"
                  style={styles.topInputStyle}

                  />
              <View style={styles.rightNavViewStyle} >
                  <TouchableOpacity onPress={()=>{alert('点击了')}}>
                  <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle} />
                  </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{alert('点击了')}}>
                  <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
                      </TouchableOpacity>
              </View>
          </View>
      )
    },

    // 跳转到购物中心的详情页
    pushToShopCenterDetail(url){
        this.props.navigator.push(
            {
                component: ShopCenterDetail,
                passProps:{'url':this.dealWithUrl(url)}
            }
        );
    },
    dealWithUrl(url){
      return url.replace('imeituan://www.meituan.com/web/?url=','');
    },
    // 跳转二级界面
    pushToDetail(){
        this.props.navigator.push(
            {
                component: HomeDetail,
                title:'详情页'
            }
        );
    }

});




const styles = StyleSheet.create({
    navBarStyle:{
      // 导航条样式
        height:Platform.OS == 'ios' ? 64:44,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',

        // 设置侧轴的对齐方式
        alignItems:'center',
        //设置主轴的对齐方式
        justifyContent:'space-around',


    },
    topInputStyle:{
      // 设置输入框
            width:width*0.7,
        height:Platform.OS == 'ios' ? 35:30,
        backgroundColor:'white',
        marginTop:Platform.OS == 'ios' ? 20:0,

        // 设置圆角
        borderRadius:Platform.OS == 'ios' ? 15:0,


        // 设置内左边距
        paddingLeft:10,
    },
    navRightImgStyle:{
        width:30,
        height:30,
    },
    container: {
        flex: 1,


        backgroundColor: '#e8e8e8',
    },

    rightNavViewStyle:{
        flexDirection:'row',

        height:40,
        alignItems:'center',
        marginTop:Platform.OS == 'ios' ? 15:0,
    },
    navTextStyle:{
        color:'white',
        fontSize:16,
        marginTop:Platform.OS == 'ios' ? 10:0,


    }
});
// 输出组件类
module.exports = Home;

