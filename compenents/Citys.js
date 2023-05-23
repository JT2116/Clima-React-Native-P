import React, { Component } from "react";
import { StyleSheet,Dimensions } from 'react-native';
import CitysListItem from "./CitysListItem";
import Screen from "./Screen";
import { RecyclerListView, LayoutProvider, DataProvider } from "recyclerlistview";

const ViewTypes = {
    FULL: 0,
    HALF_LEFT: 1,
    HALF_RIGHT: 2
};

export class Citys extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataCity: null,
            loading: true                      
        };        
    };

    getCitys = async () => {
        let url = 'http://api.openweathermap.org/geo/1.0/direct?q=&limit=10&appid=b65498bd83bb91eaf34edf249595fdac';

        try {
            const response = await fetch (url);
            const json = await response.json();   

            this.setState({...this.state,dataCity: json});            
                              
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
            <Screen>
                <CitysListItem/>
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