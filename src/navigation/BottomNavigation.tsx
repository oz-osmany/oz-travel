import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import { ItinerarioScreen, MapaScreen, TourScreen, ExcursionScreen } from '../screen';
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
               
                switch (route.name) {
                    case 'TourScreen':
                    //   label = 'Terminology'
                      iconName = 'bus-outline'
                      break
                    
                    case 'Trip':
                    //   label = 'Boats'
                      iconName = 'analytics-outline'
                      break
                    case 'ExcursionScreen':
                    //   label = 'Settings'
                      iconName = 'bicycle-outline'
                      break
                    default:
                      return null
                  }

                return <Icons name={iconName} size={size} color="white"  style={{marginTop:5}} />;
            } ,
           

            tabBarStyle :{
                backgroundColor: '#263DB4',
                borderTopColor:'#263DB4',
                height: 50
               
            },
            tabBarLabelStyle: {
                marginBottom:5,
                fontSize:11,
                color:"#e6e6f5"
            }
        }
    )}
        >
                <Bottom.Screen name="Trip" component={ItinerarioScreen}
                            options={{
                                headerShown:true,
                                title:"Itinerario",
                                headerTitleStyle:{
                                    color:COLORS.lightGray3,
                                    position:"absolute",
                                    left:120,
                                },
                                headerStyle:{
                                    backgroundColor:COLORS.blue
                                }
                                
                                
                            }}/>
                <Bottom.Screen name="ExcursionScreen" component={ExcursionScreen} options={{headerShown:false,title:"Excurciones"}}/>
                <Bottom.Screen name="TourScreen" component={TourScreen} options={{headerShown:false}}/> 
        </Bottom.Navigator>
    )
}
