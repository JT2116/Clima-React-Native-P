import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image,Dimensions } from 'react-native';

const CitysListItem = () => {
    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.thumbnail}>
                    <Image style={styles.tinyImage} source={{
                        uri: `http://openweathermap.org/img/w/03d.png`,
                    }}/>                
                </View>                
            </View>            
        </View>
    ); 

}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        // flex: 1,
        // justifyContent: 'center',
        // alignContent: 'center',
        backgroundColor: '#cdcfd1',
        flexDirection: 'row',
        alignSelf: 'center',
        width: width - 80, 
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
    }
});

export default CitysListItem;