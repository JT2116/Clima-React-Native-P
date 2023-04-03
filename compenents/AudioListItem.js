import React from "react";
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const convertTime = minutes => {
    if (minutes) {
        const hr = minutes / 60;
        const minute = hr.toString().split('.')[0];
        const percent = parseInt(hr.toString().split('.')[1].slice(0,2));
        const sec = Math.ceil((60 * percent)/100);

        if (parseInt(minute) < 10 && sec < 10) {
            return `0${minute}:0${sec}`;
        }

        if (parseInt(minute) < 10) {
            return `0${minute}:${sec}`;
        }

        if (sec < 10) {
            return `${minute}:0${sec}`;
        }
        
        return `${minute}:${sec}`;
    }
}

const renderPlayPausenIcon = isPlaying => {
    if(isPlaying){
        return <Entypo name="controller-paus" size={24} color="black" />;
    }
    return <Entypo name="controller-play" size={24} color="black" />;
}


const AudioListItem = ({title,duration,onOptionPress,onAudioPress,isPlaying,activeListItem}) => {
    return(
        <View style={styles.page}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={onAudioPress}>
                    <View style={styles.leftContainer}>
                        <View style={styles.thumbnail}>
                            <Text style={styles.thumbnailText}>
                                {activeListItem ? renderPlayPausenIcon(isPlaying) : title[0]}
                            </Text>
                        </View>
                        <View style={styles.titleContainer}>
                            <Text numberOfLines={1} style={styles.title}>
                                {title}
                            </Text>
                            <Text style={styles.timeText}>
                                {convertTime(duration)}
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
        
                <View style={styles.rightContainer}>
                    <Entypo
                        onPress={onOptionPress} 
                        name="dots-three-vertical" 
                        size={20} 
                        color="#f0f8ff"
                        style={{padding: 10}}                    
                    />
                </View>
            </View>
            <View style={styles.separator}/>
        </View>
    );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    page: {
        backgroundColor: 'black'
    },
    container:{
        flexDirection: 'row',
        alignSelf: 'center',
        width: width - 50, 
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1        
    },
    rightContainer: {
        flexBasis: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    thumbnail:{
        height: 50,
        flexBasis: 50,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    thumbnailText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#303d49'
    },
    titleContainer: {
        width: width-150,
        paddingLeft: 10
    },
    title: {
        fontSize: 16,
        color: '#f0f8ff'
    },
    separator: {
        width: width - 50,
        backgroundColor: 'white',
        opacity: 0.5,
        height: 0.5,
        alignSelf: 'center',
        margin: 10        
    },
    timeText: {
        fontSize: 14,
        color: '#b6b8b9'        
    }
})

export default AudioListItem;