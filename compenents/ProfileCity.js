import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';


const ProfileCity = () => {

    return(        
        <View style={styles.container}>
            <Text style={styles.textCity}>Las vegas            </Text>
            <Image style={styles.tinyImage} source={{
                uri: 'http://openweathermap.org/img/w/02d.png',
            }}/>            
            <Text style={styles.textInfo}>few clouds</Text>
            <Text style={styles.textInfo}>Temp: 92.73 °F</Text>
            <Text style={styles.textInfo}>Humidity: 43%</Text>
            <Text style={styles.textInfo}>Speed: 9.22 mph</Text>
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
    textInfo: {
        color: 'black',
        alignContent: 'center'
    },
    tinyImage: {
        width: 150,
        height: 150,
        // resizeMode: 'center'        
    }
});

export default ProfileCity;