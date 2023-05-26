import React, { Component } from "react";
import { StyleSheet,Dimensions } from 'react-native';
import CitysListItem from "./CitysListItem";
import Screen from "./Screen";
import { RecyclerListView, LayoutProvider, DataProvider } from "recyclerlistview";
import * as Location from 'expo-location';

export class Citys extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataCity: [],
            loading: true,
            countryID: null                      
        };        
    };

    getCountry = async () => {
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
                
        let pCountry = ''
        place.find( p => {
            pCountry = p.isoCountryCode
            this.setState({...this.state, countryID: p.isoCountryCode});             
        });
        
        this.getCitys(pCountry);
    };

    getCitys = async (idCountry) => {
        // let url = `http://api.geonames.org/searchJSON?username=ksuhiyp&country=${idCountry}&maxRows=1000`;
        let url = `http://api.geonames.org/searchJSON?username=ksuhiyp&country=do&maxRows=1000`;

        try {
            const response = await fetch (url);
            const json = await response.json(); 

            this.setState({...this.state,dataCity: json.geonames});            
        } catch (error) {
            console.error(error);
        } finally {            
            this.setState({...this.state,loading: false})
        }
    };

    componentDidMount(){
        this.getCountry();
    }
    
    render() {       

        return(        

            <Screen>
                <CitysListItem                    
                    nameCity={this.state.dataCity.name}
                />
            </Screen>
        );
    };
}

const styles = StyleSheet.create({
    text: {
        color: 'black',        
    }
})

export default Citys;