import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, Platform, SafeAreaView, TouchableOpacity, Image } from 'react-native';


export default class Home extends Component {
    render() {
        return (
            <View styles={{ flex: 1 }}>
                <SafeAreaView style={styles.androidSafeArea} />
                <ImageBackground style={styles.bgImg}
                    source={require('../assets/stars.gif')}>
                    <Text style={styles.titleText}>Stellar App</Text>
                    <Image style={styles.mainIcon}
                    source={require('../assets/main-icon.png')} >
                            </Image>
                    <View style={{ flex: 1, marginTop: 50 }}>
                        <TouchableOpacity style={styles.routeCard} 
                        onPress={()=>this.props.navigation.navigate('SpaceCraft')}>
                            <Text style={styles.routeText}>Space Craft</Text>
                            <Image style={styles.iconImage}
                                source={require('../assets/space_crafts.png')} >
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.routeCard}
                             onPress={()=>this.props.navigation.navigate('StarMap')}>
                            <Text style={styles.routeText}>Star Map</Text>
                            <Image style={styles.iconImage}
                                source={require('../assets/star_map.png')} >
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.routeCard} 
                             onPress={()=>this.props.navigation.navigate('DailyPic')}>
                            <Text style={styles.routeText}>Daily Pic</Text>
                            <Image style={styles.iconImage}
                                source={require('../assets/daily_pictures.png')} >
                            </Image>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    androidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },

    bgImg: {
        flex: 1,
        resizeMode: 'cover',

    },



    routeCard: {
        flex: 1,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'
    },
    routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'red',
        paddingTop: 25,
        marginBottom: 35,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: 'red',
        fontSize: 20
    },
    iconImage: {
        position: 'absolute',
        height: 150,
        width: 150,
        resizeMode: 'center',
        right: 20,
        top: -80
    },
     mainIcon:{   
      
        height: 150,
        width: 150,
        resizeMode: 'center',
         alignSelf:'center'
     }



})