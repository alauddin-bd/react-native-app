import { View,  Text, Button } from 'react-native';
import React from 'react';
import UseEffectHookUpdatingPhase from './src/components/UseEffectHookUpdatingPhase';

// import UseEffectHook from './src/components/UseEffectHook';
// import ClassComponents from './src/components/ClassComponents';
// import Grid from './src/components/Grid';
// import ContactListScreen from './src/screens/contactList/ContactListScreen';
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
    <View style={{padding: 10, flex: 1}}>
      <Text style={{fontSize:20, fontWeight: 'bold', marginVertical: 15}}>React Native Mobile App Tutorial</Text>     
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
      {/* <ContactListScreen /> */}
      {/* <Grid /> */}
      {/* <ClassComponents /> */}
      {/* <UseEffectHook /> */}
      <UseEffectHookUpdatingPhase />
      
    </View>
  )
}



export default App;