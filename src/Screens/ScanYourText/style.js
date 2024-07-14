import { StyleSheet } from "react-native";

const style=(height,width)=>StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    button: {
        height: 50,
        width: 150,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
    text: {
        marginTop: height*0.02,
        fontSize: 12,
        textAlign: 'center',
    },
    scrollViewStyle:{
        marginBottom:height*0.09,
        marginLeft:height*0.05,
        marginRight:height*0.05,
        marginTop:height*0.09,
        borderWidth:1,
        padding:height*0.05,
        paddingBottom:height*0.05

    },goBackText:{
        fontFamily:'UberMoveRegular',
        fontSize:12,
        color:'black'
    }
})
export default style;