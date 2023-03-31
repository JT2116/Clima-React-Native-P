import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    // let {timestamp,mocked,coords} = text;
  }
  console.log(location.coords)
  // let prueba = {"hola":112,"a":{"salud":122}}
  // console.log(prueba)

  let {timestamp,mocked,coords} = location;
  console.log(coords);
  
  return (
    <View style={styles.container}>

      <Text style={styles.paragraph}>
        {/* {timestamp} */}
        {/* {text["mocked"]} */}
        {/* {location.coords} */}
      </Text>

      <StatusBar style="auto"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,    
  }
});
