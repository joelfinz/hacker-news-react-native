import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';
import BestStoriesTab from "../../components/bestStoriesTab";
import NewStoriesTab from "../../components/newStoriesTab";
import TopStoriesTab from "../../components/topStoriesTab";



const Home = ({ navigation }: any) => {

  return (
    <View>
      <Tabs defaultIndex={0}>
        <TabScreen label="New">
          <View>
            <NewStoriesTab />
          </View>
        </TabScreen>
        <TabScreen label="Top">
          <View>
            <TopStoriesTab />
          </View>
        </TabScreen>
        <TabScreen label="Best">
          <View>
            <BestStoriesTab />
          </View>
        </TabScreen>
      </Tabs>
      <Button onPress={() => navigation.navigate('About')}>About page</Button>
    </View>
  )
}

export default Home;