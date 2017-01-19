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
    ListView
} from 'react-native';
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
// 导入外部组件
var CommonCell = require('./WDSBottomCommonCell');
var GuestYouLike = React.createClass({
    getDefaultProps(){
      return{
          api_url:'http://api.meituan.com/group/v2/deal/recommend/collaborative?msid=97A52E77-372B-46E3-AC11-C928D7AD84752016-12-27-15-15195&movieBundleVersion=100&__vhost=api.mobile.meituan.com&wifi-mac=40%3A18%3Ab1%3A36%3A73%3A68&did=42774263&utm_term=7.6.1&ci=1&__skcy=nQJSyAYeFu81q2P8p593UifJejY%3D&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=61f5fe233719faf6e3eb12b2ff5ed5de&__skts=1482823715.173607&__skno=358C1A10-150E-4CEF-8BA8-CB3F5BB9A0CE&client=group&wifi-name=Aisino&uuid=63E4BC913C98AEE72C5FF68B108740487CD1FD71108C1CEBE46A0F8CC735BD66&utm_content=63E4BC913C98AEE72C5FF68B108740487CD1FD71108C1CEBE46A0F8CC735BD66&utm_source=AppStore&version_name=7.6.1&mypos=39.942715%2C116.251198&utm_medium=iphone&wifi-strength=&wifi-cur=0&cate=1&__reqTraceID=0C3937ED-BE2D-42E0-9DBD-9F0A27D6ACE1&abtest=&js_patch_version=3&rn_package_version=0&utm_campaign=AgroupBgroupGhomepage_guesslist_2__a7158b3946238f84d3fbd35500d52b367_deal_42774263_0H0'
      }
    },

    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1,row2) => row1!==row2});
        // 初始化数据源
        return {
            dataSource:new ListView.DataSource({rowHasChanged:(row1,row2) => row1!==row2})
        }
    },

    render() {
        return (
            <View style={styles.container}>
               < CommonCell
                   leftIcon = 'cnxh'
                   leftTitle = '猜你喜欢'

                   />
                {/*列表*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow = {this.renderRow}
                    />
            </View>
        );
    },
    renderRow(rowData){
        return(
            <TouchableOpacity onPress={()=>alert(0)} >
                <View style = {styles.listViewStyle} >
                    {/*左边*/}
                    <Image source = {{uri:this.dealWithImgUrl(rowData.imageUrl)}} style = {styles.imageViewStyle} />
                    {/*右边*/}
                    <View style = {styles.rightViewStyle} >
                        <View style = {styles.rightTopViewStyle} >
                            <Text>
                                {rowData.title}
                            </Text>
                        </View>
                        <View style = {styles.rightMiddleViewStyle}>
                            <Text style = {{color:'gray'}} >
                                {rowData.subTitle}
                            </Text>
                            <Text>
                                {rowData.distance}
                            </Text>
                        </View>

                        <View style = {styles.rightBottomViewStyle}>
                            <Text style = {{color:'red'}} >
                                门市价：¥{rowData.price}
                            </Text>
                            <Text>
                                {rowData.sale}
                            </Text>
                        </View>
                        </View>
                    </View>
                </TouchableOpacity>
        )
    },
    dealWithImgUrl(url){
        if(url.search('w.h') == -1){
            // 没有找到正常返回
            return url;
        }else{
            return url.replace('w.h','120.90');
            //url.replaceData('w.h','120.90')
        }
    },
    componentDidMount(){
        // 从网络上请求数据
        this.loadDataFormNet();
    },
    loadDataFormNet(){
        fetch(this.props.api_url)
            .then((response)=>response.json())// 下一步
            .then((responseData) => {
                this.setState({
                   dataSource:this.state.dataSource.cloneWithRows(responseData.data)
                });
            })

    }
});




const styles = StyleSheet.create({
    container: {

        marginTop:10,
    },
    imageViewStyle:{
        width:120,
        height:90,
    },
    listViewStyle:{
        backgroundColor:'white',
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
        flexDirection:'row',
    },
    rightViewStyle:{
        marginLeft:8,
        width:width*0.55,
        justifyContent:'center',
    },
    rightTopViewStyle:{
        flexDirection:'row',
        marginBottom:7,
        justifyContent:'space-between'
    },
    rightMiddleViewStyle:{
        flexDirection:'row',
        marginBottom:7,
        justifyContent:'space-between'
    },
    rightBottomViewStyle:{
        flexDirection:'row',
        marginBottom:7,
        justifyContent:'space-between'
    }

});
// 输出组件类
module.exports = GuestYouLike;


