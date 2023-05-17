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
    // constructor(props){
    //     super(props);
    //     this.state = {
                      
    //     };        

    //     this.currentItem = {};
    // };
    

    render() {       
        // return(
        //     <Screen>
        //         {/* <CitysListItem/> */}    
        //         <RecyclerListView

                    
                    
                
        //         />                    
        //     </Screen>
        // );
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