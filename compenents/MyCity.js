import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';
import * as Location from 'expo-location';

export class MyCity extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: null,
            errorMsg: null,
            city: null,
            data: [],
            icon: ''
        };        
    };

    // const [location, setLocation] = useState(null);
    // const [errorMsg, setErrorMsg] = useState(null);
    // const [city, setCity ] = useState();
    
    // const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState([]);
    // const [icon, setIcon] = useState();

    
    // let getCity = async () => {
    //     let { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status !== 'granted') {
    //       setErrorMsg('Permission to access location was denied');
    //       return;
    //     }
  
    //     let location = await Location.getCurrentPositionAsync({});
    //     setLocation(location);
        
    //     const place = await Location.reverseGeocodeAsync({
    //       latitude : location.coords.latitude,
    //       longitude : location.coords.longitude
    //     });
        
    //     let city;
    //     place.find( p => {
    //       city = p.city
    //       setCity(p.city)
    //     });
    // };

    // // console.log(city);
    // let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=b65498bd83bb91eaf34edf249595fdac`;

    
    // let getWeather = async () => {
    //     try {
    //         const response = await fetch (url);
    //         const json = await response.json();            
    //         setData(json.weather);
    //         // setIcon(json.weather.icon);  
                
    //         // console.log(data);        
                        
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     getCity();
    //     getWeather();
    // },[]);

    // // let UrlIcon = ``
    // // console.log(icon);
    // console.log(data[icon]);

    return(        

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: 'black',        
    },
    listView: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default MyCity;