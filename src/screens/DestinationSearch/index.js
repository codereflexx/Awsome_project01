import React, {useState} from 'react';
import {
    View, 
    Text, 
    TextInput,
    FlatList,
    Pressable,
     
} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import searchResults from '../../../assets/data/search';
import {useNavigation} from '@react-navigation/native';
import Searchresults from '../Searchresults';

const DestinationSearch = (props) => {

const [inputText, setInputText]= useState('');

const navigation = useNavigation();


    return (
        <View style={styles.container}>
    {/* input component */}
      <TextInput
      style={styles.textInput}
      placeholder="Where you want to search jobs?"
      value={inputText}
      onChangeText={setInputText}
      />
       
     {/* List of destination */}  

        <FlatList
        data={searchResults}
        renderItem={({item}) =>(
            <Pressable onPress={()=> navigation.navigate('Home',{
                screen:'Explore',
                params: {screen:'SearchResults'},
                
                
                
            })
            }
             style={styles.row}>
                <View style={styles.iconContainer}>
                   <Entypo name={"location-pin"} size={30}/>
                </View>
        <Text style={styles.locationText}>{item.description}</Text>
                
            </Pressable>
        )}
        />
        

        </View>
    );

};
 export default DestinationSearch;