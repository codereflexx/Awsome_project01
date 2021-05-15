import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import DestinationSearch from "../screens/DestinationSearch";
import HomeTabNavigator from "../navigation/HomeTabNavigator";
import Types from "../screens/Types";


const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>

    <Stack.Navigator >
         
       
         
         <Stack.Screen 
         name={"Home"}
         component={HomeTabNavigator}
         options={{
           headerShown: false,
        }}
             />
             <Stack.Screen 
         name={"DestinationSearch"}
         component={DestinationSearch}
         options={{
           title:"Location search"}}
             />
             
        
     </Stack.Navigator>
       
       
        </NavigationContainer>
    );

};
 export default Router;