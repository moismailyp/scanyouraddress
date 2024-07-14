import { StyleSheet } from "react-native"
const style=(height,width)=>StyleSheet.create({
    Loadingtext: {
      fontFamily: 'UberMoveBold',
      fontSize: 24,
      color: 'black',
      },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addressContainer:{
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
      
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    value: {
        fontWeight: 'normal',
        color: '#555',
    },
  });
export default style
