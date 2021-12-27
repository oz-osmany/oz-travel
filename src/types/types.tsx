import { NavigatorScreenParams } from '@react-navigation/native'
import { DatosUser, DatosExcursiones, Activity } from '../interfaces/reservadoInterface';
import { MapaScreen } from '../screen/MapaScreen';
import { ItiDetailScreen } from '../screen/ItiDetailScreen';
import { OverviewScreen } from '../screen/OverviewScreen';
import { ProductScreen } from '../screen/ProductScreen';






export type ItinerStackParams = {
  ItiDetail: DatosUser
 
}
export type ProdStackParams = {
  ProdDetail: Activity
 
}

export type TopNavigatorParamsList = {
  Inicio: undefined
  Tabs: undefined
}

export type RootNavigatorParamsList = {
  Main: NavigatorScreenParams<TopNavigatorParamsList>
  ItinerDetailStack: NavigatorScreenParams<ItinerStackParams>
  ProdDetailStack: NavigatorScreenParams<ProdStackParams>
}




export type TabNavigatorParamsList = {
  OverviewScreen:undefined;
  MapaScreen:undefined;
  ProductScreen:undefined;
  Trip:undefined;
  ItinerDetailStack:NavigatorScreenParams<ItinerStackParams>
    
  }