import React, { Component,createContext } from "react";
import { StyleSheet, Text, View,Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { DataProvider } from "recyclerlistview";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AudioContext = createContext()
export class AudioProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            audioFiles: [],
            permissionError: false,
            dataProvider: new DataProvider((r1,r2) => r1 !== r2),
            playbackObj: null,
            soundObj: null,
            currentAudio: {},
            isPlaying: false,
            currentAudioIndex: null,
            playbackPosition: null,
            playbackDuration: null
        };
        this.totalAudioCount = 0;
    }

    permissionAlert = () => {        
        Alert.alert("Permission Required","This app needs to reads audo files",[{
            text: 'I am ready',
            onPress: () => this.getPermissions()
        },{
            text: 'cancel',
            onPress: () => this.permissionAlert()
        }]);
    };

    getAudioFiles = async () => {
        const {dataProvider,audioFiles} = this.state;
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
        });
        media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first: media.totalCount,
        });
        this.totalAudioCount = media.totalCount

        this.setState({
            ...this.state,
            dataProvider:dataProvider.cloneWithRows([
                ...audioFiles,
                ...media.assets
            ]), 
            audioFiles: [
                ...audioFiles,
                ...media.assets
            ]
        });

        // console.log(media.assets.length);
    };

    loadPreviousAudio = async () => {
        let previousAudio = await AsyncStorage.getItem('previousAudio');
        let currentAudio;
        let currentAudioIndex;

        if (previousAudio === null) {
            currentAudio = this.state.audioFiles[0];
            currentAudioIndex = 0;
        }else {
            previousAudio = JSON.parse(previousAudio);
            currentAudio = previousAudio.audio;
            currentAudioIndex = previousAudio.index;
        }

        this.setState({...this.state, currentAudio, currentAudioIndex});

    };

    getPermissions = async () => {
        // {
        //     "canAskAgain": true,
        //     "expires": "never",
        //     "granted": false,
        //     "status": "undetermined",
        //   }
        
        const permission = await MediaLibrary.getPermissionsAsync();
        if(permission.granted){
            //we want to get all the audio files
            this.getAudioFiles();
            
        } 

        if(!permission.canAskAgain && !permission.status) {
            this.setState({...this.state, permissionError: true});
        }

        if(!permission.granted && permission.canAskAgain){
            const {status,canAskAgain} = await MediaLibrary.requestPermissionsAsync();
            if (status === 'denied' && canAskAgain) {
                //we are going to display alert that user must allow this
                //permission to work this app
                this.permissionAlert();
            }

            if (status === 'granted') {
                //we want to get all the audio files
                this.getAudioFiles();
                                
            }

            if (status === 'denied' && !canAskAgain) {
                //we want to display some error to the user
                this.setState({...this.state, permissionError: true});                
            }
        }
    }

    componentDidMount(){
        this.getPermissions();
        if (this.state.playbackObj === null) {
            this.setState({...this.state, playbackObj: new Audio.Sound()});
        }
    }


    updateState = (prevState, newState ={}) => {
        this.setState({...prevState,...newState});
    }

    render() {
        const {
            audioFiles,
            dataProvider,
            permissionError,
            soundObj,
            playbackObj,
            currentAudio,
            isPlaying,
            currentAudioIndex,
            playbackPosition,
            playbackDuration
        } =this.state;
        if (permissionError) {
            return(
                <View>
                    <Text style={styles.text}>
                        Error permission
                    </Text>
                </View>
            )
        }
        return (
            <AudioContext.Provider 
                value={{
                    audioFiles,
                    dataProvider,
                    soundObj,
                    playbackObj,
                    currentAudio,
                    isPlaying,
                    currentAudioIndex,
                    totalAudioCount: this.totalAudioCount,
                    playbackPosition,
                    playbackDuration,
                    updateState:this.updateState,
                    loadPreviousAudio:this.loadPreviousAudio,                
                }}>
                {this.props.children}
            </AudioContext.Provider>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        // color: '#ffffff'
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2
    }
})


export default AudioProvider;