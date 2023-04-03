import React,{Component} from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { AudioContext } from "./AudioProvider";
import { RecyclerListView,LayoutProvider } from "recyclerlistview";
import AudioListItem from "./AudioListItem";
import * as MediaLibrary from 'expo-media-library';
import Screen from "./Screen";
import OptionModal from "./OptionModal";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import {play, pause, resume, playNext} from "./AudioController.js";
import { storeAudioForNextOpening } from "./helper.js"; 

export class AudioList extends Component {
    static contextType = AudioContext;

    constructor(props){
        super(props);
        this.state = {
            optioModalVisible: false,
        };

        this.currentItem = {};
    };

    layoutProvider = new LayoutProvider(
        (i) =>'audio',(type,dim)=>{
            switch (type) {
                case 'audio':
                    dim.width = Dimensions.get('window').width;
                    dim.height = 70;
                    break;
                default:
                    dim.width = 0;
                    dim.height = 0;
            }

        }
    );

    OnPlaybackStatusUpdate = async playbackStatus => {
        if (playbackStatus.isLoaded && playbackStatus.isPlaying) {
            this.context.updateState(this.context,{
                playbackPosition: playbackStatus.positionMillis,
                playbackDuration: playbackStatus.durationMillis 
            });
        }

        if (playbackStatus.didJustFinished) {
            const nextAudioIndex =this.context.currentAudioIndex + 1;
            //there is no next audio to play or the current audio is the last
            if (nextAudioIndex >= this.context.totalAudioCount) {
                this.context.playbackObj.unloadAsync();
                this.context.updateState(this.context, {
                    soundObj: null,
                    currentAudio: this.context.audioFiles[0],
                    isPlaying: false,
                    currentAudioIndex: [0],
                    playbackPosition: null,
                    playbackDuration: null,
                });
                return await storeAudioForNextOpening(this.context.audioFiles[0],0);

            }

            //otherwise we want to select the next audio
            const audio = this.context.audioFiles[nextAudioIndex];
            const status = await playNext(this.context.playbackObj, audio.uri);
            this.context.updateState(this.context, {
                soundObj: status,
                currentAudio: audio,
                isPlaying:true,
                currentAudioIndex: nextAudioIndex,
            });

            await storeAudioForNextOpening(audio,nextAudioIndex);
        }
    };

    handleAudioPress = async (audio) => {        
        const {
            soundObj,
            playbackObj,
            currentAudio,
            updateState,
            audioFiles
        } = this.context;
        
        //play audio for the first time
        if (soundObj === null) {
            const playbackObj = new Sound();
            const status = await play(playbackObj,audio.uri);
            const index = audioFiles.indexOf(audio);
            updateState(this.context,{currentAudio: audio,playbackObj:playbackObj,soundObj:status,isPlaying: true,currentAudioIndex: index});          
            playbackObj.setOnPlaybackStatusUpdate(this.OnPlaybackStatusUpdate);
            return storeAudioForNextOpening(audio,index);
        }

        //pause
        if (soundObj.isLoaded && soundObj.isPlaying && currentAudio.id === audio.id) {
            const status = await pause(playbackObj);
            return updateState(this.context,{soundObj:status,isPlaying: false});
        }

        //resume
        if (soundObj.isLoaded && !soundObj.isPlaying && currentAudio.id === audio.id) {
            const status = await resume(playbackObj);
            return updateState(this.context,{soundObj:status,isPlaying: true});              
        }

        //select another audio
        if (soundObj.isLoaded && currentAudio.id !== audio.id) {
            const status = await playNext(playbackObj,audio.uri);
            const index = audioFiles.indexOf(audio);
            updateState(this.context,{
                currentAudio:audio,
                soundObj: status,
                isPlaying: true,
                currentAudioIndex: index
            });
            return storeAudioForNextOpening(audio,index);            
        }

    };

    componentDidMount() {
        this.context.loadPreviousAudio();
    };

    rowRenderer = (type,item,index,extendedState) => {
        
        return (
            <AudioListItem 
                title={item.filename}
                isPlaying={extendedState.isPlaying}
                activeListItem={this.context.currentAudioIndex === index}
                duration={item.duration}
                onAudioPress={() => this.handleAudioPress(item)}
                onOptionPress={()=>{
                    this.currentItem = item
                    this.setState({...this.state, optioModalVisible: true})
                }}
            />
        );
    };
    
    render() {
        return (
            <AudioContext.Consumer>
                {({dataProvider,isPlaying}) => {
                    if (!dataProvider._data.length) {
                        return null;
                    }
                    return(
                        <Screen>
                            <RecyclerListView 
                                dataProvider={dataProvider} 
                                layoutProvider={this.layoutProvider}
                                rowRenderer={this.rowRenderer}
                                extendedState={{isPlaying}}
                            />
                            <OptionModal                              
                            visible={this.state.optioModalVisible}
                            onClose={
                                () => this.setState({...this.state,optioModalVisible: false})                            
                            }
                            currentItem={this.currentItem}
                            onPlayPress={() => console.log('play sound')}
                            onPlayListPress={() => console.log('add list')}
                            />
                        </Screen>
                    );
                }}
            </AudioContext.Consumer>
        )
    }    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#ffffff'        

    },
    text:{
        // color: '#ffffff'
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2
    }
})

export default AudioList;