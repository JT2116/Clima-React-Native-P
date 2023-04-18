import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';
import * as Location from 'expo-location';

const ProfileCity = () => {

    return(        
        <View style={styles.container}>
            <Text>Santiago de los Caballeros</Text>
            <Text>few clouds</Text>
            <Text>temp: 90.93 °F</Text>
            <Text></Text>

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