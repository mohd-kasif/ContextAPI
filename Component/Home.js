import React, { useState,useContext } from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {AppProvider,Context} from "../Gobal/AppProvider"


const Home=(props)=>{
  const {val,setVal}=useContext(Context);
  return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <Text>Home Page</Text>
    <Text>{val}</Text>
     <TouchableOpacity onPress={()=>setVal(val+1)}><Text>Increase</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>props.navigation.navigate("Profile")}><Text>Go to Profile</Text></TouchableOpacity>
    </View>
  )
}

export default Home;