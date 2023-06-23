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
            data: null                        
        };        
    };
    
    getCity = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {            
            this.setState({...this.state,errorMsg: 'Permission to access location was denied'});
            return;
        }  
        let location = await Location.getCurrentPositionAsync({});
        this.setState({...this.state, location: location});
        const place = await Location.reverseGeocodeAsync({
          latitude : location.coords.latitude,
          longitude : location.coords.longitude
        });
        let pCity = ''
        place.find( p => {
            pCity = p.city
            this.setState({...this.state, city: p.city});             
        });        
        this.getWeather(pCity);
    };
  
    
    getWeather = async (city) => {
        let url = ``;        
        try {
            const response = await fetch (url);
            const json = await response.json();
            this.setState({...this.state,data: json});
        } catch (error) {
            console.error(error);
        } finally {
            this.setState({...this.state,loading: false})
        }
    };

    componentDidMount(){
        this.getCity();        
    }

    render() {        
        return(
            <ProfileCity
                city = {this.state.city}
                data = {this.state.data}
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
