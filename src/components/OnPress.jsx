import { View, Text, Button } from 'react-native'
import React from 'react'

const OnPress = () => {
  let name = "Alauddin";
  const getName = () => {
    name = "Huzaifa";
    console.warn('Name : ', name);
  }
  return (
    <View>
      <Text style={{fontSize:30}}>OnPress</Text>
      <Button title='Press Here' onPress={getName} />
      {/* <Button title='Press here' onPress={() => {getName("Alauddin")}} /> */}
    </View>
  )
}

export default OnPress