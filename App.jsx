import { View,  Text, Button } from 'react-native';
import React from 'react';
import Props from './src/components/Props';
// import UseStateHook from './src/components/UseStateHook';
// import OnPress from './src/components/OnPress';
// import JSX from './src/components/JSX';
// import First from './src/components/First';

const App = () => {
  return (
    <View>
      <Text style={{fontSize:30}}>React Native Mobile App Tutorial</Text>
     
      {/* <First /> */}
      {/* <JSX /> */}
      {/* <OnPress /> */}
      {/* <UseStateHook /> */}
      <Props />
    </View>
  )
}



export default App;