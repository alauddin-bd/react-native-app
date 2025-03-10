import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
  let {count, item} = props.data;
  
  return (
    <View>
      <Text style={{fontSize:25}}>Child</Text>
      <Text style={{fontSize: 30}}>{count}</Text>
      <Text style={{fontSize: 30}}>{item}</Text>
    </View>
  )
}

export default Child