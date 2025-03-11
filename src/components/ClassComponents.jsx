import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SecondClass from './SecondClass';

class ClassComponents extends Component {

  render() {
    const age = 7;
    return (
      <View>
        <Text style={{fontSize: 20}}>Class Component</Text>
        <SecondClass age={age} />
      </View>
    )
  }
}

export default ClassComponents;
