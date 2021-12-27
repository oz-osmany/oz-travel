import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';

import {StackNavigationProp} from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native'


import { reservados } from '../API/api_user';
import {COLORS,FONTS,SIZES,images} from "../assets";
import { ItemSeparator } from './ItemSeparator';
import { HeaderTitle } from './HeaderTitle';
import { ItinerarioScreen } from '../screen/ItinerarioScreen';
import { DatosUser } from '../interfaces/reservadoInterface';
import { ItinerStackParams, RootNavigatorParamsList, TabNavigatorParamsList} from '../types/types';
import { ItinerBoton } from './ItinerBoton';
// import { RootStackParams } from '../types/types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Props{
    itinerDato:DatosUser[];
}

    //con StackNavigationProp accedo a las props de la navegacion. Recibe el tipado de RootStackParamList
     type authScreenProp = StackNavigationProp<RootNavigatorParamsList>;
    var name="md-bed-outline";
export const ListaItinerario = ({itinerDato}:Props) => {
    const navigation = useNavigation<authScreenProp>();//     
         
        var unique:any;
        var fech = reservados.map (itiner => itiner.fecha);
        unique = [...new Set (fech)]
        var cont = 1;
        var cant = unique.length;

        return (
            <View >
                <FlatList
                    data={unique}
                    keyExtractor={(item, index) => index.toString ()}//{item => `${item.id}`}//{(item, index) => index.toString ()}
                    renderItem={({ item}:any) => {
                        return (
                            <View>
                                <Text style={styles.title}>{item}</Text>
                                                             
                               {

                                    itinerDato.map ((it,index) :any=> {
                                        if (it.fecha === item) {
                                            var name;
                                            //Definir cual icono usar
                                            switch (it.tipo_evento){
                                                case "viaje avion":
                                                    name="md-airplane-outline";
                                                    break;
                                                case "check in":
                                                    name="md-bed-outline";
                                                    break;
                                                case "experiencia":
                                                    name="md-glasses-outline";
                                                    break;
                                                case "hospedaje":
                                                    name="md-bed-outline" ;
                                                    break;
                                                case "museo":
                                                    name="md-people-circle-outline";
                                                    break;
                                                case "traslado en bus":
                                                    name="md-bus-outline";
                                                    break;
                                                case "diner":
                                                    name="md-restaurant-outline"
                                                    break;
                                                case "baile":
                                                    name="musical-notes-outline";
                                                    break;
                                                case "fiesta":
                                                    name="musical-notes-outline";
                                                    break;
                                                case "caminata":
                                                    name="body-outline";
                                                    break;
                                                case "almendron":
                                                    name="md-car-outline";
                                                    break;

                                            }
                                            return (
                                                
                                               <TouchableOpacity onPress={() => navigation.navigate("ItinerDetailStack",
                                                    {
                                                        screen: 'ItiDetail',
                                                         params: {
                                                             ...it
                                                      }     
                                                     }
                                                     )}  key={index}>
                                                    <View style={styles.container}  >

                                                        <View style={styles.celda1}>
                                                            <Text style={styles.hora} >{it.hora}</Text>
                                                            <Text >{it.tipo_evento==="check in" ? "CHECK IN" : null}</Text>
                                                            <Icons name={name} size={32} color={COLORS.lightgreen}
                                                                      style={styles.icon}/>
                                                        </View>
                                                        <View style={styles.celda2} >
                                                            <Text style={styles.evento} >{it.evento}</Text>
                                                            <Text style={styles.info}> {it.provincia}</Text>
                                                            <Text style={styles.info}> {it.direccion}</Text>
                                                        </View>

                                                    </View>
                                                    <View style={{width: windowWidth,height: 1,backgroundColor:COLORS.blue}}></View>
                                                </TouchableOpacity> 

                                                               
                                            )
                                        }
                                    })

                                } 
                            </View>
                        )

                    }
                    }
                />
            </View>
        )
   
            {/* <SectionList
            renderItem={({item, index, section}: any) =>(
                <ItinerBoton itinerDato={item}/>
            )
            
            
            }
            renderSectionHeader={({section}) => (
                <Text style={{fontWeight: 'bold'}}>{section.title}</Text>
            )} 
            sections={[{title:"El encabezado",data:reservados}]}
            keyExtractor={(item, index) => index.toString ()}
            /> */}

       
    
};
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

