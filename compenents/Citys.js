import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native';


const Citys = () => {

    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.thumbnail}>
                    <Text style={styles.textInfo}>Santiago De los Caballeros</Text>
                </View>
                



            </View>
                        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#cdcfd1',
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
    textInfo: {
        color: 'black',
        alignContent: 'center',
        fontSize: 17
    },
})

export default Citys;