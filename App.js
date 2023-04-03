import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from "./compenents/AppNavigator";
import AudioProvider from "./compenents/AudioProvider";
import AudioListItem from "./compenents/AudioListItem";
import { View } from "react-native";

export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </AudioProvider>
  );

  // return (
  //   <View style={{marginTop: 50}}>
  //     <AudioListItem/>    
  //   </View>
  // );
}


