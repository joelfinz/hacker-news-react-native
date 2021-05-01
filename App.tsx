import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import 'react-native-gesture-handler';
import AppBarComp from "./src/components/appBarComp"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/containers/home";
import About from "./src/containers/about";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          header: AppBarComp,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;