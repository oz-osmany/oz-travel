import React from 'react'
import { Image, StyleSheet, View,Text } from 'react-native'
import { DatosExcursiones, DatosProvincias} from '../interfaces/reservadoInterface';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';

import { excursiones } from '../API/api_excursiones';
import { COLORS } from '../assets';
import { RootNavigatorParamsList } from '../types/types';
import styles from '../assets/theme';


interface Props {
    info: DatosExcursiones;
    height?: number;
    width?: number;
}

type authScreenProp = StackNavigationProp<RootNavigatorParamsList>;
export const ProdPoster = ({ info, height = 400, width = 300 }: Props ) => {
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
}
export const ProvinciasPoster = ({ infoProvincia, height = 400, width = 300 }: Prov ) => {

        
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity
           /*  onPress={ () => navigation.navigate('DetailScreen', movie ) } */
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
                    source={ infoProvincia.foto}
                    //resizeMode="cover"
                    style={{width:width,height:height,borderRadius:18}}
                />
                
            </View>
           
        </TouchableOpacity>
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