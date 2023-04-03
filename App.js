import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from "./compenents/AppNavigator.js";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppNavigator/>        
      </NavigationContainer>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
