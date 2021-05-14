import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
   container:{
       margin: 20,
   },


   image: {
       width: '100%',
       aspectRatio: 3/2,
       borderRadius: 10,
       resizeMode: 'cover',

   },

   distance: {
       marginVertical: 10,
       color: '#5b5b5b',

   },

   discription: {
       fontSize: 17,
       lineHeight:25,

   },
prices: {
    marginVertical: 10,
    fontSize: 17,

},

minprice: {
    fontSize:19,
    fontWeight:'bold',
    color: '#5b5b5b',

},
maxprice: {
    
    fontSize:19,
    fontWeight:'bold',
    color: 'black',
},


avgprice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',

},

});

export default styles;