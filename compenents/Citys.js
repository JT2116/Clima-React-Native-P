import React, { Component } from "react";
import { StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native';
import CitysListItem from "./CitysListItem";


export class Citys extends Component {
    constructor(props){
        super(props);
        this.state = {
                      
        };        
    };

    render() {       
        return(
            <CitysListItem/>
        );
    };
}

const styles = StyleSheet.create({
    text: {
        color: 'black',        
    }
})

export default Citys;