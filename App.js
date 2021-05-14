import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';






import {
  
 
  StatusBar,
  useColorScheme,
  
} from 'react-native';


import Router from './src/navigation/Router'


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <>
    <StatusBar barStyle="dark-content" />
    
    <Router/>
    </>
  );
};


export default App;