import React from 'react';
import { View,StyleSheet,StatusBar } from 'react-native';

const Screen = ({ children }) => {
    return <View style={style.container} >{children}</View>
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: StatusBar.currentHeights
    }
});

export default Screen;
