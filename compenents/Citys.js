import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Citys = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Citys</Text>
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

export default Citys;