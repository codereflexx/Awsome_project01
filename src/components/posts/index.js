import React from 'react';
import {View,Image,Text} from 'react-native';
import styles from './styles.js';

const Post = (props) => {

const post = props.post;

    return(
 <View style={styles.container}>
     
     {/* images of jobs */}

     <Image style={styles.image} source={{uri: post.image}}
     />

     {/* distance from user location */}

     <Text style={styles.distance}>{post.location} m</Text>

     {/* type and discription*/}
     
     <Text style={styles.discription}>
         {post.type}.  {post.title}
         </Text>


     {/* price offered */}
     <Text style={styles.prices}>
         <Text style={styles.minprice}>₹{post.minprice} </Text>
        -
         <Text style={styles.maxprice}> ₹{post.maxprice}</Text>
         /hrs
     </Text>
     {/* average price for this job */}
     
     <Text style={styles.avgprice}>₹{post.avgprice} avg for this work type</Text>



 </View>

    );

};

export default Post;