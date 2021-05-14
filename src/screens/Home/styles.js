import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create ({
  image: {
      width:'100%',
      height:500,
      resizeMode: 'cover',
      justifyContent: 'center',
},
title: {
     fontSize: 80,
     fontWeight: 'bold',
     color: 'white',
     width: '70%',
     marginLeft: 25,

},

button: {
   backgroundColor: '#fff',
   width: 200,
   marginTop: 35,
   marginLeft: 25,
   height: 50,
   borderRadius: 15,
   justifyContent: 'center',
   alignItems: 'center',

},

buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    

},
searchButton: {
   backgroundColor: '#fff',
   width: Dimensions.get('screen').width -60,
   height: 50,
   marginHorizontal:30,
   flexDirection: 'row',
   borderRadius: 30,
   justifyContent: 'center',
   alignItems: 'center',
   top: 20,
   position: 'absolute',
   zIndex: 100,

},

searchButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    

},

});



export default styles;