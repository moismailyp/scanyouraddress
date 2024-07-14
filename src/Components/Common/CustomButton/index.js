import { Button,Text, TouchableOpacity } from 'react-native';
import {useDimensions} from '../../../Context/DimensionContext';
import style from './style';

const CustomButton = ({title,handleButtonPress}) => {
  const {height, width} = useDimensions();
  const responsiveStyle=style(height,width)
  return (
    <TouchableOpacity onPress={handleButtonPress} style={responsiveStyle.container}>
      <Text style={responsiveStyle.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton