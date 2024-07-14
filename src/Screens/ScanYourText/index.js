import React, { useEffect, useState } from "react";
import { BackHandler, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDimensions } from "../../Context/DimensionContext";
import style from "./style";
import CustomButton from "../../Components/Common/CustomButton";

const ScanYourText = () => {
    const [extractedText, setExtractedText] = useState('');
    const { height, width } = useDimensions();
    const responsiveStyle = style(height, width);
    const [isTextEmpty, setIsTextEmpty] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();
    const { text } = route.params;

    useEffect(() => {
        setExtractedText(text);
        if (text === '' || text === 'REDMI9 POWER') {
            setIsTextEmpty(true);
        }
    }, [text]);

    useEffect(() => {
        const backAction = () => {
            navigation.navigate('HomeScreen', { mount: 1 });
            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, [navigation]);

    const handleNavigation = () => {
        navigation.navigate('DisplayText', { text: extractedText });
    };

    const handleNavigationToHomeScreen = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <SafeAreaView style={responsiveStyle.container}>
            {!isTextEmpty ? (
                <>
                    <ScrollView style={responsiveStyle.scrollViewStyle}>
                        {text ? <Text style={responsiveStyle.text}>{text}</Text> : null}
                        {/* Additional content if needed */}
                    </ScrollView>
                    <CustomButton handleButtonPress={handleNavigation} title={'✔'} />
                    <View style={{ padding: 20 }}>
                        <TouchableOpacity onPress={handleNavigationToHomeScreen}><Text style={responsiveStyle.goBackText}>go back to homepage</Text></TouchableOpacity>
                    </View>
                </>
            ) : (
                <>
                    <View>
                        <Text>No text in the image</Text>
                    </View>
                    <TouchableOpacity onPress={handleNavigationToHomeScreen}>
                        <Text style={responsiveStyle.goBackText}>go back to home</Text>
                    </TouchableOpacity>
                </>
            )}
        </SafeAreaView>
    );
};

export default ScanYourText;
