import { useState,useEffect } from 'react';
import { launchCamera } from "react-native-image-picker";
import {View, Text} from 'react-native';
import style from './style';
import CustomButton from '../../Components/Common/CustomButton';
import {useDimensions} from '../../Context/DimensionContext';
import {useNavigation} from '@react-navigation/native';
import TextRecognition from "@react-native-ml-kit/text-recognition";
import { useIsFocused } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
const HomeScreen = () => {
  const {height, width} = useDimensions();
  const responsiveStyle = style(height, width);
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const [dots, setDots] = useState('');
  const [welcome,setWelcome]=useState(true)
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route=useRoute()
  const mount=route.mount
  const handleNavigation = () => {
    openCamera()
    setWelcome(false)
  };
  useEffect(() =>{
    recognizeText();
  },[image])
useEffect(()=>{
  if(mount===1)
  {
    setWelcome(true)
  }
},[isFocused])

 const recognizeText = async () => {

  if (image) {
      try {
          const result = await TextRecognition.recognize(image);
          if (result) {
             setText(result.text);
              navigation.replace('ScanYourText',{text:result.text})
          }

      } catch (error) {
          console.error("Error recognizing text: ", error);
      }
  }
};

 const openCamera = async () => {
  try {
      const result = await launchCamera({ mediaType: 'photo' });
      if (result.didCancel) {
        // If the user cancelled the camera, navigate to the Home screen
      }
      if (result.assets && result.assets.length > 0) {
          setImage(result.assets[0].uri);
      }
  } catch (error) {
      console.error("Error opening camera: ", error);
  }
};


  return (
    <View style={responsiveStyle.container}>
     {welcome?(<><View />
      <View style={{alignItems: 'center'}}>
        <Text style={responsiveStyle.welcomeText}>Welcome to</Text>
        <Text style={responsiveStyle.welcomeText}>Address Scanner</Text>
      </View>
      <View style={responsiveStyle.buttonView}>
        <Text style={responsiveStyle.catchyPhrase}>
          Effortlessly scan and extract addresses from images with precision.
        </Text>

        <CustomButton
          handleButtonPress={handleNavigation}
          title={'get started'}
        />
          </View>
        </>
      ) : (
        <>
          
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={responsiveStyle.Loadingtext}>{dots}</Text>
          </View>
        </>)}
    </View>
  );
};
export default HomeScreen;
