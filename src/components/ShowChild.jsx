import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const ShowChild = () => {
  useEffect(() => {
    return () => {
      console.log('Child component unmounted');
    }
  }, [])
  return (
    <View>
      <Text>Child Component</Text>
    </View>
  )
}

export default ShowChild