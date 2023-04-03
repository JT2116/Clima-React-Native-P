import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const PlayList = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Play List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#000000'
    },
    text: {
        color: '#ffffff'
    }
})

export default PlayList;