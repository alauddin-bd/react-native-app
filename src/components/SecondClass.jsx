import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

class SecondClass extends Component {
    constructor(){
      super();
      this.state = {
        myName: "Alauddin",
      }
    }
    updateName = () => {
      this.setState({myName: "Alifa"})
    }
  render() {
    return (
      <View>
        <Text style={{fontSize: 15}}> Name : {this.state.myName} Age : {this.props.age} </Text>
        <Button title='Update Name' onPress={this.updateName} />
      </View>
    )
  }
}

export default SecondClass
