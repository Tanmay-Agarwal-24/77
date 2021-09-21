import React, { Component } from 'react';
import { Text, View ,TextInput} from 'react-native';
import { WebView } from 'react-native-webview'


export default class StarMap extends Component {
    constructor() {
        super();
        this.state = {
            longitude: '',
            latitude: ''
        }
    }
    render() {
        var Path= 'https://virtualsky.lco.global/embed/index.html?longitude='+
        this.state.longitude+'&latitude='+this.state.latitude+
        '&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
       
        return (
            <View style={{ flex: 1 }} >
                <TextInput
                style={{height:40,boder:'gray',alignSelf:'center',width:200,borderColor:'red',borderWidth:2}}
                placeholder={'Enter the longitude'}
                placeholderTextColor={'blue'}
                onChangeText={(text)=>{
                this.setState({
                    longitude:text
                })}}
                value={this.state.longitude}
                />
                 <TextInput
                style={{height:40,boder:'gray',alignSelf:'center',width:200,borderColor:'red',borderWidth:2}}
                placeholder={'Enter the latitude'}
                placeholderTextColor={'red'}
                onChangeText={(text)=>{
                this.setState({
                    latitude:text
                })}}
                value={this.state.latitude}
                />
                <WebView
                    scalesPageToFit={true} 
                    source={{uri:Path}}
                    style={{marginTop:20,marginBottom:20}} />
            </View>
        )
    }
}
