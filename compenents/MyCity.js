import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';
import * as Location from 'expo-location';
import ProfileCity from "./ProfileCity";

export class MyCity extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: null,
            errorMsg: null,
            city: null,
            loading: true,
            data: [],
            icon: ''
        };        
    };
    
    getCity = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            //setErrorMsg('Permission to access location was denied');
            this.setState({...this.state,errorMsg: 'Permission to access location was denied'});
            return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        // setLocation(location);
        this.setState({...this.state, location: location});
        
        const place = await Location.reverseGeocodeAsync({
          latitude : location.coords.latitude,
          longitude : location.coords.longitude
        });
                
        place.find( p => {
            //city = p.city
            this.setState({...this.state, city: p.city}); 

        });
    };
  
    
    getWeather = async () => {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${this.getState.city}&units=imperial&appid=b65498bd83bb91eaf34edf249595fdac`;

        try {
            const response = await fetch (url);
            const json = await response.json();            
            // data = json.weather;
            this.setState({...this.state,data: json.weather});            
            // setIcon(json.weather.icon);  
            this.setState({...this.state,icon: icon});                            
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
            // loading = false;
            this.setState({...this.state,loading: false})

        }
    };

    render() {        
        return(
            <ProfileCity
                city = {this.getState.city}
                data = {this.getState.data}
                icon = {this.getState.icon}
            />  
        );
    };


};

const styles = StyleSheet.create({
    text: {
        color: 'black',        
    }
});

export default MyCity;