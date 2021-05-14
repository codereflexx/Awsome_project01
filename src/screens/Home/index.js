import React from 'react';
import {
    View, 
    Text, 
    ImageBackground,
    Pressable   
} from 'react-native';
import styles from './styles';
import Fontisto from "react-native-vector-icons/Fontisto";

const Homescreen = (props) => {
    return (
        <View>
            <Pressable 
            style={styles.searchButton} 
            onPress={() => console.warn('data','Search Btn clicked')}
            >
            <Fontisto name="search" size={25} color={"#f15454"} />
            <Text style={styles.searchButtonText}>Search jobs anywhere.</Text>
            </Pressable>

         <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
           <Text style={styles.title}>Earn more</Text>
             
             
            <Pressable 
            style={styles.button} 
            onPress={() => console.warn('data','Explore Btn clicked')}
            >
            <Text style={styles.buttonText}>Explore jobs nearby</Text>
            </Pressable>
         </ImageBackground>
        </View>
    );
};
export default Homescreen;