import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import {
  ItinerStackParams,
    ProdStackParams,
    RootNavigatorParamsList,
    TopNavigatorParamsList,
  } from '../types/types'

import { ProfileScreen,ProductScreen,ItinerarioScreen } from '../screen';
import { BottomNavigation } from './BottomNavigation';
import { ItiDetailScreen } from '../screen/ItiDetailScreen';
import { DatosUser } from '../interfaces/reservadoInterface';
import { ProdDetailScreen } from '../screen/ProdDetailScreen';
import { InicioScreen } from '../screen/InicioScreen';
 //import { RootStackParams } from '../types/types';

 
 const RootStack = createStackNavigator<RootNavigatorParamsList>()
 const MainStack = createStackNavigator<TopNavigatorParamsList>()
 const ItinerStack = createStackNavigator<ItinerStackParams>()
 const ProdStack = createStackNavigator<ProdStackParams>()

/* const Stack=createStackNavigator<RootStackParams>();
export const Navigation = () => {
    return (
       
            <Stack.Navigator 
                screenOptions={{
                    
                    title:null,
                    headerShown:false,
            }}
            >
                <Stack.Screen name="BottomNavigation" component={BottomNavigation}/>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
                
       
            </Stack.Navigator>
     
    )
} */

const ItiDetailScreenStack = () => {
    const { Navigator, Screen } = ItinerStack
  
    return (
      <Navigator screenOptions={{
        title:null,
        headerShown:false,
        }}>
        <Screen name="ItiDetail" component={ItiDetailScreen} />
        
      </Navigator>
    )
  }
  const ProDetailScreenStack = () => {
    const { Navigator, Screen } = ProdStack
  
    return (
      <Navigator screenOptions={{
        title:null,
        headerShown:false,
        }}>
        <Screen name="ProdDetail" component={ProdDetailScreen} />
        
      </Navigator>
    )
  }

const MainNavigator: React.FC = () => {
    const { Navigator, Screen } = MainStack
  
    return (
      <Navigator  initialRouteName="Inicio"
      screenOptions={{
        title:null,
        headerShown:false,


    }}
      >
        <Screen name="Inicio" component={InicioScreen} />
        <Screen name="Tabs" component={BottomNavigation} /> 
      </Navigator>
    )
  }
const RootNavigator: React.FC = () => {
    const { Navigator, Screen } = RootStack
  
    return (
      <Navigator
      screenOptions={{
        title:null,
        headerShown:false,


    }}
      >
        <Screen name="Main" component={MainNavigator} />
        <Screen name="ItinerDetailStack" component={ItiDetailScreenStack} />
        <Screen name="ProdDetailStack" component={ProDetailScreenStack} />
      </Navigator>
    )
  }
  
  export default RootNavigator