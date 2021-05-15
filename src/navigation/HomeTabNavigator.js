import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Explorenavigator from './Explorenavigator'


import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { color } from 'react-native-reanimated';


const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        
        
      <Tab.Navigator tabBarOptions={{
        activeTintColor:'#f15454',
      }}>
          <Tab.Screen 
          name={'Explore'}
          component={Explorenavigator}
          options={{ tabBarLabel: 'Explore', tabBarIcon: ({color}) => (
            <Fontisto name={"search"} size={25} color={color}/>
              )
              
          }}
          />
          <Tab.Screen 
          name={'Home'}
          component={HomeScreen}
          options={{ tabBarLabel: 'Home', tabBarIcon: ({color}) => (
            <FontAwesome name={"heart-o"} size={25} color={color}/>
               
              )
          }}
          />
          <Tab.Screen 
          name={'Map'}
          component={HomeScreen}
          options={{ tabBarLabel: 'Map', tabBarIcon: ({color}) => (
               <FontAwesome5 name={"safari"} size={25} color={color}/>
              )
          }}
          />
          <Tab.Screen 
          name={'Messages'}
          component={HomeScreen}
          options={{ tabBarLabel: 'Messages', tabBarIcon: ({color}) => (
               <Feather name={"message-square"} size={25} color={color} />
              )
          }}
          />
          <Tab.Screen 
          name={'Profile'}
          component={HomeScreen}
          options={{ tabBarLabel: 'Profile', tabBarIcon: ({color}) => (
                <EvilIcons name={"user"} size={30} color={color} />
              )
          }}
          />
      </Tab.Navigator>
       
       
       
    );

};
 export default HomeTabNavigator;