import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-paper"



const Home = ({navigation} :any) => {

  return (
    <View>
      <Text>Home page</Text>
      <Button onPress={()=>navigation.navigate('About')}>About page</Button>
    </View>
  )
}

export default Home;