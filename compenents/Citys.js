import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import CitysListItem from "./CitysListItem";
import Screen from "./Screen";
import { RecyclerListView, LayoutProvider, DataProvider } from "recyclerlistview";


export class Citys extends Component {
    constructor(props){
        super(props);
        this.state = {
                      
        };        

        this.currentItem = {};
    };

    dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });

    layoutProvider = new LayoutProvider(
        (i) =>'audio',(type,dim)=>{
            switch (type) {
                case 'audio':
                    dim.width = Dimensions.get('window').width;
                    dim.height = 70;
                    break;
                default:
                    dim.width = 0;
                    dim.height = 0;
            }

        }
    );

    render() {      
        // {({}) => {

        // }} 
        return(
            <Screen>
                {/* <CitysListItem/> */}    
                <RecyclerListView
                    layoutProvider={this.layoutProvider}
                    dataProvider={this.dataProvider}
                    rowRenderer={<CitysListItem/>}
                    
                
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