import {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import style from './style';
const SplashScreen = () => {
  const responsiveStyle = style();
  const [dots, setDots] = useState('');
  useEffect(() => {
    const intervel = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' :prev+'.'));
      return () => clearInterval(intervel);
    }, 500);
  }, []);
  return (
    <View style={responsiveStyle.container}>
     <Text style={responsiveStyle.text}>Address Scanner</Text>
      <View><Text style={responsiveStyle.Loadingtext}>loading{dots}</Text></View>
 </View>
  );
}
export default SplashScreen;
