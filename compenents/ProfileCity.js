import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';


const ProfileCity = ({city,data}) => {
    // console.log(city);
    console.log(data.main.temp);
    return(        
        <View style={styles.container}>
            <Text style={styles.textCity}>{city}</Text>
            <Image style={styles.tinyImage} source={{
                uri: 'http://openweathermap.org/img/w/02d.png',
            }}/>
            <View style={styles.containerInfo}>
                <Text style={styles.textInfo}>{data.weather[0].description}</Text>
                <Text style={styles.textInfo}>Temp: {data.main.temp} °F</Text>
                <Text style={styles.textInfo}>Humidity: {}%</Text>
                <Text style={styles.textInfo}>Speed: 9.22 mph</Text>
            </View>
        </View>        
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cdcfd1',
    },
    containerInfo: {
        backgroundColor: 'black',
        margin: 10,
        padding: 30,
        borderRadius: 15,
        borderWidth: 6,
        borderColor: 'white'
    },
    textCity: {
        color: 'black',        
        fontSize: 30,       
    },
    textInfo: {
        color: '#cdcfd1',
        alignContent: 'center',
        fontSize: 24
    },
    tinyImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain'               
    }
});

export default ProfileCity;