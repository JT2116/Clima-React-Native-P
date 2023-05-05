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
            //setErrorMsg('Permission to access location was denied');
            this.setState({...this.state,errorMsg: 'Permission to access location was denied'});
            return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        // let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
        // setLocation(location);
        // let location = await Location.getCurrentPositionAsync({timeout: 50000});
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
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=b65498bd83bb91eaf34edf249595fdac`;
        // console.log(city);
        try {
            const response = await fetch (url);
            const json = await response.json();   
            // console.log(json);         
            // data = json.weather;
            this.setState({...this.state,data: json});            
            // setIcon(json.weather.icon);                              
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
            // loading = false;
            this.setState({...this.state,loading: false})

        }
    };

    
    componentDidMount(){
        this.getCity();
        // this.getWeather();
    }

    render() {   
        // this.getCity();
        // this.getWeather();     
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