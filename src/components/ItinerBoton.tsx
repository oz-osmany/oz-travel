import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import {  RootNavigatorParamsList } from '../types/types';
import { DatosUser } from '../interfaces/reservadoInterface';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS,SIZES } from '../assets';

interface Props{
    itinerDato:DatosUser;
}
type authScreenProp = StackNavigationProp<RootNavigatorParamsList>;
export const ItinerBoton = ({itinerDato}:Props) => {
    const navigation = useNavigation<authScreenProp>();//
    return (
        <View>
            <TouchableOpacity    onPress={() => navigation.navigate('ItinerDetailStack',
                  {
                            screen: 'ItiDetail',
                          params: {
                               ...itinerDato
                        }    
                    }   
                    )} 
                    >
                                <View style={styles.container}  >

                                    <View style={styles.celda1}>
                                        <Text style={styles.hora} >{itinerDato.hora}</Text>
                                        <Text >{itinerDato.titulo==="check in" ? "CHECK IN" : null}</Text>
                                         {/* <Icons name={name} size={32} color={COLORS.lightgreen} 
                                                style={styles.icon}/> */}
                                    </View>
                                    <View style={styles.celda2} >
                                        <Text style={styles.evento} >{itinerDato.evento}</Text>
                                        <Text style={styles.info}> {itinerDato.direccion}</Text>
                                        <Text style={styles.info}> {itinerDato.telefono}</Text>
                                    </View>

                                </View>
                                <View style={{width: SIZES.width,height: 1,backgroundColor:COLORS.blue}}></View>
                            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",

    },
    celda1:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"transparent",
        marginBottom:2
    },
    celda2:{
        flex:2,
        flexDirection:"column",
        backgroundColor:"transparent",
        marginBottom:2
    },
    title:{
        backgroundColor:COLORS.transparentgray,
        textAlign:"center"
    },
    hora:{
        //position:"absolute",
        //top:5,
        fontWeight:"bold",
        fontSize:15,
        color:COLORS.lightGray3
    },
    evento:{
        fontWeight:"bold",
        fontSize:15,
        color:COLORS.lightGray4

    },
    info:{
        //fontWeight:"bold",
        fontSize:15,
        color:COLORS.lblue

    },
    icon:{
        left:70,
        bottom:15
    },
background: {
    position:"absolute",
    top:0,left:0,
    width:SIZES.width,
    height: SIZES.height,
    backgroundColor:COLORS.blue,
    opacity:0.7
},


});