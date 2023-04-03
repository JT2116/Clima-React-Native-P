import React, { useContext, useEffect, Component } from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Screen from "./Screen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import PlayerButton from "./PlayerButton";
import { AudioContext } from "./AudioProvider";
import {play, pause, resume, playNext} from "./AudioController.js";

const {width} = Dimensions.get('window');

const Player = () => {
    const context = useContext(AudioContext);
    // static contextType = AudioContext;

    const {
        playbackPosition,
        playbackDuration,
    } = context;

    const calculateSeebBar = () => {
        if (playbackPosition !== null && playbackDuration !== null) {
            return playbackPosition / playbackDuration;
        }
        return 0
    };

    useEffect(() => {
        context.loadPreviousAudio();
    },[]);

    const handlePlayPause = async () => {
        
        if (context.soundOnj === null) {
            console.log('uwu');
            const audio = context.currentAudio;
            const status = await play(context.playbackObj, audio.uri);
            return context.updateState(context, {
                soundOnj: status,
                currentAudio: audio,
                isPlaying: true,
                currentAudioIndex: context.currentAudioIndex
            });
        }
        // pause
        // resume
    };

    if (!context.currentAudio) {
        return null;
    }

    return(
        <Screen>
            <View style={styles.container}>
                <Text style={styles.audioCount}>
                    {`${context.currentAudioIndex + 1} / ${context.totalAudioCount}`}
                </Text>
                <View style={styles.midBannerContainer}>
                    <MaterialCommunityIcons name="music-box-outline" size={300} color="white" />
                </View>

                <View style={styles.audioPlayerContainer}>
                    <Text numberOfLines={1} style={styles.audioTitle}>
                        {context.currentAudio.filename}
                    </Text>
                    <Slider
                        style={{width: width, height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                        value={calculateSeebBar()}
                        minimumTrackTintColor="#f0f8ff"
                        maximumTrackTintColor="gray"
                        thumbTintColor="white"
                    />
                    <View style={styles.audioControllers}>
                        <PlayerButton iconType='PREV'/>
                        <PlayerButton
                            onPress={handlePlayPause}                              
                            style={{marginHorizontal: 25}} 
                            iconType={context.isPlaying ? 'PLAY' : 'PAUSE'}
                        />
                        <PlayerButton iconType='NEXT'/>

                    </View>           
                </View>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    audioControllers: {
        width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    container:{
        flex: 1,
        backgroundColor: '#000000'
    },
    audioCount: {
        color: '#f0f8ff',
        textAlign: 'right',
        padding: 15,
        fontSize: 14        
    },
    midBannerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    audioTitle: {
        fontSize: 16,
        color: '#f0f8ff',
        padding: 15
    }

});

export default Player;