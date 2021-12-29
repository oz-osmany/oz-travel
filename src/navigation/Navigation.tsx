import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import {
  ItinerStackParams,
    ProdStackParams,
    RootNavigatorParamsList,
    TopNavigatorParamsList,
    TourStackParams,
  } from '../types/types'

import { ProfileScreen,ExcursionScreen,ItinerarioScreen } from '../screen';
import { BottomNavigation } from './BottomNavigation';
import { ItiDetailScreen } from '../screen/ItiDetailScreen';
import { DatosUser } from '../interfaces/reservadoInterface';
import { ExcursionDetailScreen } from '../screen/ExcursionDetailScreen';
import { InicioScreen } from '../screen/InicioScreen';
import {TourDetailScreen} from '../screen/TourDetailScreen';
 //import { RootStackParams } from '../types/types';

 
 const RootStack = createStackNavigator<RootNavigatorParamsList>()
 const MainStack = createStackNavigator<TopNavigatorParamsList>()
 const ItinerStack = createStackNavigator<ItinerStackParams>()
 const ProdStack = createStackNavigator<ProdStackParams>()
 const TourStack = createStackNavigator<TourStackParams>()


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
  const ExcursionDetailScreenStack = () => {
    const { Navigator, Screen } = ProdStack
  
    return (
      <Navigator screenOptions={{
        title:null,
        headerShown:false,
        }}>
        <Screen name="ExcursionDetail" component={ExcursionDetailScreen} />
        
      </Navigator>
    )
  }
  const TourDetailScreenStack = () => {
    const { Navigator, Screen } = TourStack
  
    return (
      <Navigator screenOptions={{
        title:null,
        headerShown:false,
        }}>
        <Screen name="TourDetail" component={TourDetailScreen} />
        
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
        <Screen name="ExcursionDetailStack" component={ExcursionDetailScreenStack} />
        <Screen name="TourDetailStack" component={TourDetailScreenStack} />
      </Navigator>
    )
  }
  
  export default RootNavigator