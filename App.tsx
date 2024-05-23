import React,{Component,useState} from "react";
import {View,Text,Button,StyleSheet,Alert} from 'react-native';
import Task16 from "./Tasks/Task16";
import Task17 from "./Tasks/Task17";

export default class App extends Component {
  render(){
    return(

      <View style={styles.appcontainer}>
        
        <Task17></Task17>
        
      </View>

    )
  }
}
const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
