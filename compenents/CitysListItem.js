import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image,Dimensions } from 'react-native';
import Screen from "./Screen";

const CitysListItem = ({nameCity}) => {
    // console.log(nameCity);
    if (nameCity!=null) {
        return(
          
            <View style={styles.page}>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <View style={styles.thumbnail}>
                            <Image style={styles.tinyImage} source={{
                                uri: `http://openweathermap.org/img/w/03d.png`,
                            }}/>                
                        </View>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text numberOfLines={1} style={styles.title}>
                            Santiago de los Caballeros
                            {/* {nameCity[1].name} */}
                        </Text>
                        <Text>
                            87.39 °F
                        </Text>
                    </View>          
                </View>                            
            </View>
            
        );         
    } else {
        return(
            <View style={styles.container}>                               
                <View style={styles.containerInfo}>                    
                    <Text style={styles.textInfo}>                        
                        Loading
                    </Text>
                </View>                
            </View>
        );        
    }

}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    page:{
        backgroundColor: '#cdcfd1',        
    },
    container:{
        backgroundColor: '#cdcfd1',
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 10,        
        width: width - 10,
        borderBottomWidth: 0.9,
        borderBottomColor: 'black', 
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1        
    },
    thumbnail:{
        height: 50,
        flexBasis: 50,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    tinyImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain'               
    },
    titleContainer:{
        width: width-100,
        justifyContent: 'center'
        // paddingLeft: 10
    },
    title: {
        fontSize: 18,
        color: 'black'
    }
});

export default CitysListItem;