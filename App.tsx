/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React from 'react';
 
 import { ThemeProvider } from './src/context/themeContext/ThemeContext';
 import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';




 const App= () => {
  
  return (
    <NavigationContainer>
        <AppState> 
        <RootNavigator/>
     </AppState> 
    </NavigationContainer>
   
  );
};

/* const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}  */
const AppState = ({ children }: any) => {

  return (
    <GradientProvider>
      { children }
    </GradientProvider>
  )

}
export default App;
