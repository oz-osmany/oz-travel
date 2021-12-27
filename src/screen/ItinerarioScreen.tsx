import React,{useState,useEffect} from 'react'
import { View,Text, ImageBackground, Dimensions, StyleSheet } from 'react-native';

import {dummyData,dummyTours,COLORS,FONTS,SIZES,images} from "../assets";
import { ListaItinerario } from '../components/ListaItinerario';

import {reservados} from "../API/api_user";
import { DatosUser } from '../interfaces/reservadoInterface';
import { useItinerario } from '../hooks/useItinerario';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ItinerarioScreen = () => {


    const {reserva}=useItinerario();
    /*  const [datos, setDatos] = useState<Props>({
         reserva:[]
         });
    const loadData= ()=>{    
    setDatos({
        reserva:reservados
    }) 
    }
    useEffect(()=>{
        loadData()
    },[]);  */
    const renderImageB=():JSX.Element=>{
        return(
            <ImageBackground
                source={images.cristo}
                style={{
                    flex:1,
                    width:SIZES.width,
                    height: SIZES.height,
                    opacity:0.7
                }}
            >


            </ImageBackground>
        )
    }
    return (
        <View>
            {renderImageB()}
            {<View style={styles.background}></View>}
            <ListaItinerario itinerDato={reserva}/>
           
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        position:"absolute",
        top:0,left:0,
        width:windowWidth,
        height: windowHeight,
        backgroundColor:COLORS.blue,
        opacity:0.7
    },
});