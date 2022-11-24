import React, { useState } from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Home from "./Component/Home"
import Profile from "./Component/Profile";
import {AppProvider,Context} from "./Gobal/AppProvider";

const Stack=createNativeStackNavigator();

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <AppProvider>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}></Stack.Screen>
    <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default App;