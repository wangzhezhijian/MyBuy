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
    TouchableOpacity,
    Platform,
    Switch,
} from 'react-native';


var CommonCell = React.createClass({

    getDefaultProps(){
      return{
          title:'',//标题
          // 外界控制是否有开关
          isSwitch:'false',//是否展示开发
          rightTitle:''
      }
    },
    getInitialState(){
      return{
          isOn:false
      }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>{alert(this.props.title)}} >
            <View style={styles.container}>
                <Text style={{marginLeft:8}}>
                    {this.props.title}
                </Text>

                {
                    this.renderRightView()
                }


            </View>
            </TouchableOpacity>
        );
    },
    //cell 右边展示的内容
    renderRightView(){
        // 判断
        if(this.props.isSwitch){
            // true
            return(
                <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn: !this.state.isOn})}} style={{marginRight: 8}} />
            )
        }else
        {
            return(
                <View style={{flexDirection:'row',alignItems:'center'}} >
                    {this.rightTitle()}
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}}/>
                </View>
            )
        }
    },
    rightTitle(){
      if(this.props.rightTitle.length > 0){
          return(
              <Text style={{color:'gray',marginRight:5}} >{this.props.rightTitle}</Text>
          )
      }
    },
});




const styles = StyleSheet.create({
    container: {
        height:Platform.OS == 'ios' ?44:30,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        // 主轴对齐方式
        flexDirection:'row',
        justifyContent:'space-between',

        alignItems:'center',
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
});
// 输出组件类
module.exports = CommonCell;


