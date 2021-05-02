import React from "react"
import { View } from "react-native"
import { Button, Text, BottomNavigation } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BestStoriesTab from "../../components/bestStoriesTab";
import NewStoriesTab from "../../components/newStoriesTab";
import TopStoriesTab from "../../components/topStoriesTab";
import SettingsTab from "../../components/settingsTab";

const Tab = createMaterialBottomTabNavigator();

const Home = ({ navigation }: any) => {
  
  return (
    <Tab.Navigator
      backBehavior={"initialRoute"}
      initialRouteName={"new_stories"}

    >
      <Tab.Screen
        name="new_stories"
        component={NewStoriesTab}
        options={{
          title: "New", tabBarIcon: "alert-circle"
        }}
      />
      <Tab.Screen
        name="top_stories"
        component={TopStoriesTab}
        options={{
          title: "Top", tabBarIcon: "arrow-up"
        }}
      />
      <Tab.Screen
        name="best_stories"
        component={BestStoriesTab}
        options={{
          title: "Best", tabBarIcon: "thumb-up"
        }}
      />
      <Tab.Screen
        name="app_settings"
        component={SettingsTab}
        options={{
          title: "Settings", tabBarIcon: "cog"
        }}
      />
      </Tab.Navigator>
  )
}

export default Home;