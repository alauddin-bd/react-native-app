import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const  UseStateHook = () => {
  const [name, setName] = useState('Alauddin');
  const updateName = () => {
    setName("Mohammad Alauddin");
  }
  return (
    <View>
      <Text style={{fontSize: 25}}>UseStateHook</Text>
      <Text style={{fontSize: 25}}>{name}</Text>
      <Button title='Press' onPress={updateName} />
    </View>
  )
}

export default  UseStateHook