import React from "react";
import { Text,StyleSheet, SafeAreaView } from "react-native";
import SignInScreen from "./screens/login";
import LogInScreen from "./screens/register"
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const App = () =>{
  return(
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
})
export default App