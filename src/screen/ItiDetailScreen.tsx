import React from 'react'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { Image, ImageBackground, ImageBase, PlatformColor, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import Icons from 'react-native-vector-icons/Ionicons';

import { ItinerStackParams } from '../types/types'
import {COLORS,FONTS,SIZES,images,icons} from "../assets";
import LinearGradient from 'react-native-linear-gradient';

export interface ItiDetailProps {
    navigation: StackNavigationProp<ItinerStackParams, 'ItiDetail'>
    route: RouteProp<ItinerStackParams, 'ItiDetail'>
  }
  
export const ItiDetailScreen = ( {
    navigation,
    route,
  }:ItiDetailProps ) => {
     const {
        params: {titulo, id ,descripcion,hora,fecha,chofer,pais,provincia,imagen,evento,direccion,telefono},
      } = route  
      function renderHeaderSection(){
       
      
        // console.log(imagen);
        
        return(
            <ImageBackground
                source={imagen}
                resizeMode="cover"
                style={{
                    width:"100%",
                    height:SIZES.height < 700 ? SIZES.height*0.5 : SIZES.height *0.6
                }}
            >
                <View
                    style={{flex:1}}
                >
                    {renderHeaderBar()}
                </View>
                <View
                    style={{flex:1,justifyContent:"flex-end"}}
                >
                   <LinearGradient
                        start={{x:0,y:0}}
                        end={{x:0,y:1}}
                        colors={["transparent",COLORS.blue]}
                        style={{
                            width:"100%",
                            height:150,
                            alignItems:"center",
                            justifyContent:"flex-end"
                        }}
                    > 
                        <Text
                            style={{color:COLORS.white,fontSize:24
                            }}>
                            {evento}
                        </Text>

                    </LinearGradient> 



                </View>
            </ImageBackground>
        )
    }
    function renderDetalles(){
        return(
            <View style={styles.container}>
                <View style={styles.caja_info}>
                    
                    <Icons name="time-outline" size={24} color="white" style={styles.iconos}/> 
                    <Text style={{marginTop:15,marginLeft:25,color:COLORS.lightgreen}}>DISPONIBLE:</Text>
                    <Text style={{marginTop:15,marginLeft:25,color:COLORS.lightblue}}>{hora}</Text>
                </View>
                <View style={styles.caja_info}>
                    <Icons name="location-outline" size={24} color="white" style={styles.iconos}/> 
                    <Text style={{marginTop:15,marginLeft:25,color:COLORS.lightblue}}>{direccion}</Text>
                </View>
                <View style={styles.caja_info}>
                    <Icons name="call-outline" size={24} color="white" style={styles.iconos}/> 
                    <Text style={{marginTop:15,marginLeft:25,color:COLORS.lightblue}}>{telefono}</Text>
                </View>

                <View>
                    <Text style={{marginTop:15,textAlign:"center",color:COLORS.white,fontSize:24}}>Descripción del evento</Text>
                    <View
                        style={{
                            width:"90%",
                            height:1,
                            marginLeft: "auto",
                            marginRight: "auto",
                            backgroundColor:"gray"
                        }}>

                    </View>
                </View>

                <View style={styles.caja_info}>

                    <Text
                        style={{
                            marginTop:15,
                            color:COLORS.lightblue,
                            marginRight: 15,
                            marginLeft: 15,
                            fontSize:16
                        }}>
                        {descripcion}
                    </Text>
                </View>
            </View>
        )
    }
    function renderHeaderBar(){
        return(
            <View
                style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center",
                    // marginTop: PlatformColor.OS === "ios"?40:20,
                    paddingHorizontal:SIZES.padding
                }}
            >
                <TouchableOpacity
                    style={{
                        alignItems:"center",
                        justifyContent:"center",
                        width:50,
                        height:50,
                        borderRadius:20,
                        backgroundColor:COLORS.transparentBlack
                    }}
                    onPress={()=>navigation.goBack()}
                >
                    <Image
                        source={icons.left_arrow}
                        style={{
                            width:20,
                            height:20,
                            tintColor:COLORS.white
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    
   
    return (
      <ScrollView
      contentContainerStyle={{flex:1,backgroundColor:COLORS.blue}}
      style={{backgroundColor:COLORS.blue}}
  >


      {renderHeaderSection()}

      {renderDetalles()}
  </ScrollView>
    )
}
const styles=StyleSheet.create({
  iconos:{
      //position:"absolute",
      marginTop: 15,
      left:10,

  },
  caja_info:{
      //flex:1,
      flexDirection:"row"
  },
  container:{
      marginRight:10,
      marginLeft:10
  },
  button:{
      height:40,
      width:200,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:COLORS.red,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 10,
      borderRadius:20
  }


})