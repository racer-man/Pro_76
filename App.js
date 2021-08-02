import * as React from 'react';
import { NavigationContainer, Text, StyleSheet } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from "./screens/Home";
import {Daily} from "./screens/DailyPic";
import {StarMapScreen} from "./screens/StarMap";
import {Spacy} from "./screens/SpaceCraft";

function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" component={HomeScreen}/>
    <Stack.Navigator initialRouteName="SpaceCraft"/>
      headerShown: false
    }}>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="StarMap" component={Spacy}/>
    <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen}/>
    <Stack.Screen name="Daily" component={DailyPic}/>
    </NavigationContainer>
  );
}