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
            dataCity: null,
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
        let url = ``;


        try {
            const response = await fetch (url);
            const json = await response.json();            
            this.setState({...this.state,dataCity: json.geonames});
            console.log(this.state.dataCity[1].name);  
        } catch (error) {
            console.error(error);
        } finally {            
            this.setState({...this.state,loading: false})
        }
    };

    componentDidMount(){
        this.getCountry();        
    }

    rowRenderer = (nameCity) => {
        return(
            <CitysListItem
                nameCity={nameCity}        
            />
        );
    }
    
    render() {
        return(        

            
            <Screen>
                {/* {this.rowRenderer(this.state.dataCity[2].name)} 
                <CitysListItem
                    nameCity={this.state.dataCity[2].name}
                /> */}
                <CitysListItem 
                    nameCity={this.state.dataCity[1].name}
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
