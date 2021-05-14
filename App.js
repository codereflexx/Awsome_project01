/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Entype from 'react-native-vector-icons/Entypo';




import {
  SafeAreaView,
 
  StatusBar,

  Text,
  useColorScheme,
  View,
} from 'react-native';

import Homescreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/Searchresults/index';
import Post from './src/components/posts';
import feed from './assets/data/feed';
import DestinationSearch from './src/screens/DestinationSearch';
import JobTypeScreen from './src/screens/Types';

const post1 = feed[0];




const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      
    {/*<Homescreen />*/}
    {/*<Post post={post1}/>*/} 
     {/*<SearchResultsScreen/>*/}
     {/*<DestinationSearch/>*/}
      <JobTypeScreen/>
    </SafeAreaView>
    </>
  );
};
 

export default App;