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


var BottomCell = React.createClass({

    getDefaultProps(){
      return{
          leftIcon:'',
          leftTitle:'',
          rightTitle:'',
      }
    },


    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('aaa')}}>
            <View style={styles.container}>
                {/*左边*/}
                <View style = {styles.leftViewStyle} >
                    <Image source = {{uri:this.props.leftIcon}} style={{width:23,height:23,marginRight: 5}}/>
                    <Text style = {{fontSize:18}} >{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style = {styles.rightViewStyle}>
                    <Text style={{color:'green'}}>{this.props.rightTitle}</Text>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8,marginLeft:5}} />
                </View>
            </View>
                </ TouchableOpacity >
        );
    }
});




const styles = StyleSheet.create({
    container: {
      height:44,
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',

        justifyContent:'space-between',

        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },

    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8,
    },
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center',
    }
});
// 输出组件类
module.exports = BottomCell;


