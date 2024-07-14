import {StyleSheet} from 'react-native';
const style = (height,width) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      justifyContent: 'space-between',
    },
    welcomeView: {
      alignItems:'center'
    },
    welcomeText: {
      fontFamily: 'UberMoveBold',
      fontSize: 25,
      color:'black'
    },
    catchyPhrase:{
      textAlign:'center',
      fontFamily:'UberMoveMedium',
      marginBottom:height*0.02,
      fontSize:14,
      color:'black'
    },
    buttonView:{
      alignItems:'center',
      justifyContent:'center',
      padding:height*0.02
    },
    Loadingtext: {
      fontFamily: 'UberMoveBold',
      fontSize: 24,
      color: 'black',
    },

  });
export default style;
