import React, { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import { extractAddressParts } from "./utils";
import { useDimensions } from "../../Context/DimensionContext";
import style from "./style";
import CustomButton from "../../Components/Common/CustomButton";

const DisplayText = () => {
  const route = useRoute();
  const [loading, setLoading] = useState(true);
  const { text } = route.params;
  const [address, setAddress] = useState(null);
  const [dots, setDots] = useState('');
  const { height, width } = useDimensions();
  const responsiveStyle = style(height, width);
  const navigation = useNavigation();

  useEffect(() => {
    const callExtractAddressParts = async () => {
      const addressParts = await extractAddressParts(text);
      if (addressParts) {
        setAddress(addressParts);
        setLoading(false);
      }
    };

    callExtractAddressParts();
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleNavigationToHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={responsiveStyle.container}>
      {loading ? (
        <View>
          <Text style={responsiveStyle.loadingText}>Loading{dots}</Text>
        </View>
      ) : address === null ? (
        <View>
          <Text>No address found in the text</Text>
        </View>
      ) : (
        <>
          <View style={responsiveStyle.addressContainer}>
            {address.name && (
              <Text style={responsiveStyle.label}>
                Name: <Text style={responsiveStyle.value}>{address.name}</Text>
              </Text>
            )}
            {address.addressLine1 && (
              <Text style={responsiveStyle.label}>
                Address Line 1: <Text style={responsiveStyle.value}>{address.addressLine1}</Text>
              </Text>
            )}
            {address.addressLine2 && (
              <Text style={responsiveStyle.label}>
                Address Line 2: <Text style={responsiveStyle.value}>{address.addressLine2}</Text>
              </Text>
            )}
            {address.city && (
              <Text style={responsiveStyle.label}>
                City: <Text style={responsiveStyle.value}>{address.city}</Text>
              </Text>
            )}
            {address.state && (
              <Text style={responsiveStyle.label}>
                State: <Text style={responsiveStyle.value}>{address.state}</Text>
              </Text>
            )}
            {address.postalCode && (
              <Text style={responsiveStyle.label}>
                Postal Code: <Text style={responsiveStyle.value}>{address.postalCode}</Text>
              </Text>
            )}
            {address.country && (
              <Text style={responsiveStyle.label}>
                Country: <Text style={responsiveStyle.value}>{address.country}</Text>
              </Text>
            )}
          </View>
          <View style={{padding:20}}>
          <CustomButton handleButtonPress={handleNavigationToHomeScreen} title="Go to Homepage" />
          </View>
        </>
      )}
    </View>
  );
};

export default DisplayText;
