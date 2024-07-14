import { StyleSheet } from "react-native";

const style = (height, width) => StyleSheet.create({
    container: {
      backgroundColor: 'black',
      borderRadius: height * 0.23,
      height: height * 0.06,
      width: width * 0.90,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      fontFamily: 'UberMoveMedium',
      color: 'white',
      fontSize: 18,
    },
})
export default style