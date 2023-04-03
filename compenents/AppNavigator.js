import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import Citys from './Citys';
import MyCity from './MyCity';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='My City' component={MyCity} options={{
                tabBarIcon: ({size,color}) => {                   
                    return <MaterialCommunityIcons name="weather-partly-cloudy" size={size} color={color} />
                },
                tabBarActiveTintColor: '#f0f8ff',
                tabBarStyle: {
                    backgroundColor: 'black',                                        
                },
                headerShown: false
            }}/>
            <Tab.Screen name='Citys' component={Citys} options={{                
                tabBarIcon: ({size,color}) => {
                    return <MaterialIcons name="location-city" size={size} color={color} />                                 
                },
                tabBarActiveTintColor: '#f0f8ff',
                tabBarStyle: {
                    backgroundColor: 'black',                                        
                },
                headerShown: false
            }}
            />
        </Tab.Navigator>
    );    
}

export default AppNavigator;