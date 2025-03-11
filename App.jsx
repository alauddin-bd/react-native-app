import { View,  Text, Button } from 'react-native';
import React from 'react';
import ContactListScreen from './src/screens/contactList/ContactListScreen';

// import LoginForm from './src/components/LoginForm';
// import SectionListScreen from './src/components/SectionListScreen';
// import FlatListScreen from './src/components/FlatListScreen';
// import InputText from './src/components/InputText';
// import Styling from './src/components/Styling';
// import Props from './src/components/Props';
// import UseStateHook from './src/components/UseStateHook';
// import OnPress from './src/components/OnPress';
// import JSX from './src/components/JSX';
// import First from './src/components/First';

const App = () => {
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize:30}}>React Native Mobile App Tutorial</Text>     
      {/* <First /> */}
      {/* <JSX /> */}
      {/* <OnPress /> */}
      {/* <UseStateHook /> */}
      {/* <Props /> */}
      {/* <InputText /> */}
      {/* <Styling /> */}
      {/* <FlatListScreen /> */}
      {/* <SectionListScreen /> */}
      {/* <LoginForm /> */}
      <ContactListScreen />
    </View>
  )
}



export default App;