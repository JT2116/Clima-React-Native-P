import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';


const ProfileCity = ({city,data}) => {
    if (data!=null) {
        return(        
            <View style={styles.container}>
                <Text style={styles.textCity}>{city}</Text>
                <Image style={styles.tinyImage} source={{
                    uri: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                }}/>
                <View style={styles.containerInfo}>
                    <Text style={styles.textInfo}>{data.weather[0].description}</Text>
                    <Text style={styles.textInfo}>Temp: {data.main.temp} °F</Text>
                    <Text style={styles.textInfo}>Humidity: {data.main.humidity}%</Text>
                    <Text style={styles.textInfo}>Speed: {data.wind.speed} mph</Text>
                </View>
            </View>        
        );        
    }else {
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
        height: 120,
        resizeMode: 'contain'               
    }
});

export default ProfileCity;