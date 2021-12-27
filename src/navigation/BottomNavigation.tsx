import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import { ItinerarioScreen, MapaScreen, OverviewScreen, ProductScreen } from '../screen';
import {COLORS} from '../assets';
import { TabNavigatorParamsList } from '../types/types';

const Bottom = createBottomTabNavigator<TabNavigatorParamsList>();
// const Bottom=createBottomTabNavigator();
export const BottomNavigation = () => {
    return (
        <Bottom.Navigator
        
        screenOptions={({ route }) => ({
             tabBarIcon: ({ focused, color, size }) => {
                let iconName;
               /*  if (route.name === 'Overview') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } else if (route.name === 'Mapa') {
                    iconName = focused
                        ? 'map'
                        : 'map-outline';
                }else if (route.name === 'Nearby') {
                    iconName = focused
                        ? 'sync-circle'
                        : 'sync-circle-outline';
                }else if (route.name === 'Profile') {
                    iconName = focused
                        ? 'person'
                        : 'person-outline';
                }else if (route.name === 'Trip') {
                    iconName = focused
                        ? 'analytics'
                        : 'analytics-outline';
                }else if (route.name === 'Explorar') {
                    iconName = focused
                        ? 'search'
                        : 'search-outline';
                } */
                switch (route.name) {
                    case 'OverviewScreen':
                    //   label = 'Home'
                      iconName = 'home'
                      break
                    case 'MapaScreen':
                    //   label = 'Terminology'
                      iconName = 'map-outline'
                      break
                    case 'Trip':
                    //   label = 'Boats'
                      iconName = 'analytics-outline'
                      break
                    case 'ProductScreen':
                    //   label = 'Settings'
                      iconName = 'search-outline'
                      break
                    default:
                      return null
                  }

                return <Icons name={iconName} size={size} color="white"  style={{marginTop:5}} />;
            } ,
           

            tabBarStyle :{
                backgroundColor: '#263DB4',
                borderTopColor:'#263DB4',
                height: 60
                /*position:"absolute",

                left:15,
                right:15,
                height: 60,
                borderRadius:15*/
            },
            tabBarLabelStyle: {
                marginBottom:5
            }
        }
    )}
        >
            <Bottom.Screen name="OverviewScreen" component={OverviewScreen} options={{headerShown:false}}/>
            <Bottom.Screen name="Trip" component={ItinerarioScreen}
                            options={{
                                headerShown:true,
                                //title:"YOUR ROUTE",
                                 headerTitleStyle:{
                                    color:COLORS.lightGray3,
                                    position:"absolute",
                                    left:120,
                                },
                                headerStyle:{
                                    backgroundColor:COLORS.blue
                                }


                            }}/>
                <Bottom.Screen name="MapaScreen" component={MapaScreen}/>
                <Bottom.Screen name="ProductScreen" component={ProductScreen} options={{headerShown:false}}/>
        </Bottom.Navigator>
    )
}
