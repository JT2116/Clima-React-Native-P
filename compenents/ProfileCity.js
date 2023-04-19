import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';


const ProfileCity = () => {

    return(        
        <View style={styles.container}>
            <Image source={{uri:'../assets/02d.png'}}/>
            <Text>Santiago de los Caballeros</Text>
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
        padding: 24,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: 'black',        
    },
    listView: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default ProfileCity;