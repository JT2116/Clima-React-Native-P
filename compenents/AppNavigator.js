import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AudioList from "./AudioList";
import Player from "./Player";
import PlayList from "./PlayList";
import {MaterialIcons,FontAwesome5} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Sound List' component={AudioList} options={{                
                tabBarIcon: ({size,color}) => {
                    return <MaterialIcons name="headset" size={size} color={color}/>                    
                },
                tabBarActiveTintColor: '#f0f8ff',
                tabBarStyle: {
                    backgroundColor: 'black',                                        
                }
            }}
            />
            <Tab.Screen name='Player' component={Player} options={{
                tabBarIcon: ({size,color}) => {
                    return <FontAwesome5 name="compact-disc" size={size} color={color}/>
                },                
                tabBarActiveTintColor: '#f0f8ff',
                tabBarStyle: {
                    backgroundColor: 'black',                                        
                }
            }}/>
            <Tab.Screen name='Play List' component={PlayList} options={{
                tabBarIcon: ({size,color}) => {
                    return <MaterialIcons name="library-music" size={size} color={color}/>
                },
                tabBarActiveTintColor: '#f0f8ff',
                tabBarStyle: {
                    backgroundColor: 'black'                    
                }
            }}/>
        </Tab.Navigator>
    );
}

export default AppNavigator;