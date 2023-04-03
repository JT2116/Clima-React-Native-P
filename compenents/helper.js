import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeAudioForNextOpening = (audio,index) => {
    AsyncStorage.setItem('previousAudio',JSON.stringify({audio,index}))
}