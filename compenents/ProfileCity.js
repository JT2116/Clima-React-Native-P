import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';


const ProfileCity = () => {

    return(        
        <View style={styles.container}>
            <Text style={styles.textCity}>Las vegas            </Text>
            <Image style={styles.tinyImage} source={{
                uri: 'http://openweathermap.org/img/w/02d.png',
            }}/>            
            <Text>few clouds</Text>
            <Text>Temp: 92.73 °F</Text>
            <Text>Humidity: 43%</Text>
            <Text>Speed: 9.22 mph</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    textCity: {
        color: 'black',
        alignContent: 'center',
        fontSize: 30,        
        margin: 27        
    },
    tinyImage: {
        width: 150,
        height: 150,
        // resizeMode: 'center'        
    }
});

export default ProfileCity;