import {createContext, useContext, useEffect, useState} from 'react';
import {useWindowDimensions, Dimensions as dim, Dimensions} from 'react-native';

const dimensionContext = createContext();
export const useDimensions = () => useContext(dimensionContext);
export const DimensionContextProvider = ({children}) => {
  const Dimensions = useWindowDimensions();
  const initialHeight = dim.get('window').height;
  const initialWidth = dim.get('window').width;
  const [height, setHight] = useState(initialHeight);
  const [width, setWidth] = useState(initialWidth);
  const [isPortrait, setIsPotrait] = useState(false);

  const checkIsPotrait = () => {
    const dimension = dim.get('screen');
    return dimension.height >= dimension.width;
  };
  useEffect(() => {
    setSize ();
  }, [Dimensions]);
  useEffect(() => {
    setIsPotrait(checkIsPotrait());
   dim.addEventListener('change', () => {
      setIsPotrait(checkIsPotrait);
    });
  });
  const setSize = () => {
    const {height,width} = Dimensions;
    setHight(height);
    setWidth(width);
  };
  return (
    <dimensionContext.Provider value={{height, width, isPortrait}}>
      {children}
    </dimensionContext.Provider>
  );
};
