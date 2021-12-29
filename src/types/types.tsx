import { NavigatorScreenParams } from '@react-navigation/native'
import { DatosUser, DatosExcursiones, Activity, DatosProvincias } from '../interfaces/reservadoInterface';
import { MapaScreen } from '../screen/MapaScreen';
import { ItiDetailScreen } from '../screen/ItiDetailScreen';
import { TourScreen } from '../screen/TourScreen';
import { ExcursionScreen } from '../screen/ExcursionScreen';






export type ItinerStackParams = {
  ItiDetail: DatosUser
 
}
export type ProdStackParams = {
  ExcursionDetail: Activity
 
}
export type TourStackParams = {
  TourDetail: DatosProvincias
 
}

export type TopNavigatorParamsList = {
  Inicio: undefined
  Tabs: undefined
}

export type RootNavigatorParamsList = {
  Main: NavigatorScreenParams<TopNavigatorParamsList>
  ItinerDetailStack: NavigatorScreenParams<ItinerStackParams>
  ExcursionDetailStack: NavigatorScreenParams<ProdStackParams>
  TourDetailStack:NavigatorScreenParams<ProdStackParams>
}




export type TabNavigatorParamsList = {
  TourScreen:undefined;
  MapaScreen:undefined;
  ExcursionScreen:undefined;
  Trip:undefined;
  ItinerDetailStack:NavigatorScreenParams<ItinerStackParams>
    
  }