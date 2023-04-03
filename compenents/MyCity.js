import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const MyCity = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>My city</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: 'black'
    }
})

export default MyCity;