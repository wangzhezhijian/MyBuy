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
    Image,
    Platform,
    WebView,
} from 'react-native';


var ShopCenterDeatil = React.createClass({

    getInitialState(){
        return{
            detailUrl:this.props.url
        }

    },

    render() {

        return (
            <View style={styles.container}>
                {this.renderNavBar()}
               < WebView
                   automaticallyAdjustContentInsets={false}
                   style={styles.webView}
                   source={{uri: this.state.detailUrl}}
                   javaScriptEnabled={true}
                   domStorageEnabled={true}
                   decelerationRate="normal"
                   onNavigationStateChange={this.onNavigationStateChange}
                   onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                   startInLoadingState={true}

                   />

            </View>
        );
    },
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle} >
                <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.leftViewStyle} >
                    <Image source={{uri:'icon_camera_back_normal'}} style={styles.navImageStyle} />
                </TouchableOpacity>

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
        flex:1,
        backgroundColor:'red',
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
    },
    leftViewStyle:{
        // 绝对定位
        position:'absolute',
        left:10,
        bottom:10,
    }
});
// 输出组件类
module.exports = ShopCenterDeatil;


