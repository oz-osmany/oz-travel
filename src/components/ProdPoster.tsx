import React from 'react'
import { Image, StyleSheet, View,Text, Dimensions, FlatList } from 'react-native'
import { DatosExcursiones, DatosProvincias} from '../interfaces/reservadoInterface';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import Carousel, { Pagination }  from 'react-native-snap-carousel';

import { excursiones } from '../API/api_excursiones';
import { COLORS } from '../assets';
import { RootNavigatorParamsList } from '../types/types';
import styles from '../assets/theme';
import { provincias } from '../API/api_provincias';

const { width: windowWidth } = Dimensions.get('window');
const { height: windoHeight } = Dimensions.get('window');
interface Props {
    info: DatosExcursiones;
    height?: number;
    width?: number;
}

type authScreenProp = StackNavigationProp<RootNavigatorParamsList>;
export const ProdPoster = ({ info, height = 420, width = 300 }: Props ) => {
    const navigation = useNavigation<authScreenProp>();
   
    
    return (
        <TouchableOpacity
            
            activeOpacity={0.8}
            style={ {
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
        >
            <View >
                <Image 
                    source={ info.imagen}
                    resizeMode="cover"
                    style={{width:290,height:height,borderRadius:18}}
                />
                
                
            </View>
            <View style={styless.etiqueta}>
                <Text style={{color:COLORS.white,fontSize:26}}>
                    {info.titulo}
                </Text>
            </View>
        </TouchableOpacity>
        
    )
}

interface Prov {
    infoProvincia: DatosProvincias;
    height?: number;
    width?: number;
    activo:any;
}
export const ProvinciasPoster = ({ infoProvincia, height =windoHeight , width = windowWidth,activo }: Prov ) => {

        
    const navigation = useNavigation();
    
    return (
        <View >
            <TouchableOpacity
               /*  onPress={ () => navigation.navigate('DetailScreen', movie ) } */
                activeOpacity={0.8}
                style={ {
                     width,
                     height,
                   
                }}
            >
                    <View >
                         <Image
                            source={ infoProvincia.foto}
                            //resizeMode="cover"
                            style={{width:width,height:height}}
                        /> 
                        <View style={{position:"absolute",top:400,backgroundColor:"rgba(0, 0, 0, 0.4)",width:windowWidth,height:400}}>
                            <View style={{position:"relative"}}>
                                <Text style={{fontSize:36,lineHeight: 22,fontFamily: "Roboto-Regular",color:"white",paddingTop:30,textAlign:"center"}}>
                                   {infoProvincia.name}
                                </Text>
                                <View style={{alignItems:"center",top:10}}>
                                    <TouchableOpacity style={{width:230,height:40,backgroundColor:"white",borderRadius:18,justifyContent:"center",alignItems:"center"}}>
                                        <Text style={{color:"black"}}>
                                            Reservar
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{top:20}}>
                                    <Text style={{fontSize:18,color:"white",left:10}}>
                                        Puntos del recorrido: 
                                    </Text>
                                    {
                                        // Los recorridos
                                        infoProvincia.paradas.map(parada=>{
                                            return(

                                            <View style={{left:25,top:2}} key={parada}>
                                                <Text style={{color:"white"}}>
                                                    {parada}
                                                </Text>
                                            </View>
                                            )
                                            
                                        })
                                    }
                                   <Text style={{left:10,top:10,fontSize:18,color:"white"}}>
                                       Punto de encuentro: 
                                   </Text>
                                   <Text style={{left:25,top:10,color:"white"}}>
                                   {infoProvincia.direccion}
                                   </Text>
                                   <Text style={{left:10,top:20,color:"white",fontSize:18}}>
                                       Tipo de transporte: 
                                       <Text style={{color:"yellow"}}>{infoProvincia.tipo_transp} </Text>
                                   </Text>
                                   <Text style={{left:10,top:20,color:"white",fontSize:18}}>
                                       Precio: 
                                       <Text style={{color:"yellow",fontSize:20}}>{infoProvincia.precio} €</Text>
                                   </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 120,
                            alignItems: 'center',
                            
                            bottom:120
                        }}>
                            <Pagination 
                                dotsLength={ provincias.length }
                                activeDotIndex={ activo }
                                dotStyle={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                }}
                            />
                    </View>
                </View>
            
            </TouchableOpacity>
        </View>
    )
}

const styless = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    },
    etiqueta:{
        position:"absolute",
        bottom:0,
        borderBottomLeftRadius:18,
        backgroundColor:"red",
        marginLeft:7,
        paddingRight:5,
    }
});