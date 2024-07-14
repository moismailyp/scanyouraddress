import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../SplashScreen';
import DisplayText from '../DisplayText';
import HomeScreen from '../HomeScreen';
import {DimensionContextProvider} from '../../Context/DimensionContext';
import ScanYourText from '../ScanYourText';
const Stack = createNativeStackNavigator();
const App = () => {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  return (
    <DimensionContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {Loading ? (
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          ) : (
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}></Stack.Screen>
          )}
          <Stack.Screen
             name="ScanYourText"
             component={ScanYourText}
          />
            <Stack.Screen
            name="DisplayText"
            component={DisplayText}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DimensionContextProvider>
  );
};
export default App;
