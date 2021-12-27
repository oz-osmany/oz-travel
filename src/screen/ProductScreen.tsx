import React, { useContext, useEffect, useState,useRef } from 'react'
import { View, Text, ScrollView, Dimensions, TouchableOpacityBase, TouchableOpacity, FlatList, Animated, Platform,Image } from 'react-native';

import { GradientBackground } from '../components/GradientBackground';
import { GradientContext } from '../context/GradientContext';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors';
import Icons from 'react-native-vector-icons/Ionicons';


import { excursiones } from '../API/api_excursiones';
import { getImageColors } from '../helpers/getColores';
import { useItinerario } from '../hooks/useItinerario';
import { ProdPoster, ProvinciasPoster } from '../components/ProdPoster';


import { COLORS, FONTS, SIZES } from '../assets';

import { provincias } from '../API/api_provincias';
import { DatosExcursiones } from '../interfaces/reservadoInterface';


const { width: windowWidth } = Dimensions.get('window');


export const ProductScreen = ({navigation}) => {

   
  
    const [visible, setVisible] = useState(true);
    const [places, setPlaces] = useState(excursiones[0].actividades)
    const [ activeIndex, setActiveIndex] = useState(0);

    
    //  const { top } = useSafeAreaInsets(); 
    const { setMainColors } = useContext( GradientContext )
   
    const getPosterColors = async( index: number ) => {
        
        // console.log(index);
        const uri =excursiones[index].imagen;//excursion[index] ;
        const colors = await ImageColors.getColors(uri, {});
        
        // console.log(colors);
        let primary;
        let secondary;
    
    if (colors.platform === "android") {
        // Access android properties
        primary = colors.dominant;
        secondary = colors.average;
        
    } else {
        // Access iOS properties
        // e.g.
        /* primary = colors.primar;
        secondary = colors.secondary; */
    }
       // console.log(uri);
        
        // const [ primary = 'green', secondary = 'orange' ] = await getImageColors( uri );
         setMainColors({ primary, secondary })   
       
        
    }

    useEffect(() => {
        if( excursiones.length > 0 ) {
            getPosterColors(0)
        }
    }, [ excursiones])

    const SlideTour=()=>{
        return(

            <View >
                    <TouchableOpacity
                        style={{flexDirection:"row"}}
                         onPress={()=>(setVisible(!visible))}
                    >
                        <Text style={{flex:1,textAlign:"center",color:COLORS.black,fontSize:22,}}>
                        {visible?"Excursiones en la ciudad":"Tour entre provincias"}
                        </Text>
                       <Icons name={visible?"chevron-up-outline":"chevron-down-outline"} size={32} color="black" style={{position:"absolute",right:30}}/> 
                    </TouchableOpacity>
            </View>

        )
    }
    const RenderExcursiones=()=> {
        if (visible){
 
             return (
                 
                     <Carousel 
                            data={ excursiones }
                            renderItem={ ({ item }: any) => <ProdPoster info={ item } /> }
                            sliderWidth={ windowWidth }
                            itemWidth={ 300 }
                            inactiveSlideOpacity={0.9}
                            
                            // onSnapToItem={ index => getPosterColors( index ) }  : React.SetStateAction<number>
                            onSnapToItem={ (index) => {
                                /* setActiveIndex(index);
                                 if ( index === 2 ) {
                                    isVisible.current = true;
                                    fadeIn()
                                }  */
                                getPosterColors( index )
                                setPlaces([
                                    ...excursiones[index].actividades,
                                ])
                                // console.log(index);
                                
                            }}
                       
                        /> 
             )
         }else{
             return (
                <Carousel 
                data={ provincias }
                renderItem={ ({ item }: any) => <ProvinciasPoster infoProvincia={ item } /> }
                sliderWidth={ windowWidth }
                itemWidth={ 300 }
                inactiveSlideOpacity={0.9}
                onSnapToItem={ (index) => {
                    getPosterColors( index )
                   
                    setPlaces([
                        ...excursiones[index].actividades,
                    ])
                    // console.log(index);
                    
                }}
                    /> 
 
            ) 
        }
 
     }
    const RenderPlaces=()=> {
        if (!visible){
            return (
                <Animated.FlatList
                    alwaysBounceVertical
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    data={provincias}
                    keyExtractor={item => `${item.id}`}
                    contentContainerStyle={{
                        alignItems: 'center',
                    }}
                    snapToAlignment="center"
                    // snapToInterval={Platform.OS === 'ios' ? PLACES_ITEM_SIZE + 28 : PLACES_ITEM_SIZE} //your element width
                    scrollEventThrottle={16}
                    decelerationRate={0}
                    bounces={false}
                  
                    renderItem={({ item, index }) => {
                        return(
                            <TouchableOpacity
                                style={{

                                    flexDirection:"row",
                                    alignItems:"center",
                                    // flexWrap:"wrap",
                                    padding:3,
                                    marginTop:10,
                                    borderRadius:SIZES.radius,
                                    backgroundColor:COLORS.lightGray2,
                                    paddingLeft:5,

                                    width:SIZES.width-20,

                                }}
                                onPress={ () => navigation.navigate('ProdDetailStack',             
                                {
                                    screen: 'ProdDetail',
                                         params: {
                                            ...item
                                    }      
                                    }
                          ) }
                            >
                                <View style={{
                                    width:SIZES.width-35,
                                    backgroundColor:COLORS.transparentgray,
                                    borderRadius:SIZES.radius
                                }}>
                                    <Image
                                        source={item.foto}
                                        resizeMode="cover"
                                        style={{width:140,height:140,borderRadius:SIZES.radius}}
                                    />

                                    {/*Informacion */}
                                    <View
                                        style={{
                                            position:"absolute",
                                            top:20,
                                            left:"35%",
                                            paddingHorizontal:SIZES.radius,
                                            paddingVertical:5,

                                        }
                                        }>
                                        <Text
                                            style={
                                                {
                                                    color:COLORS.black,
                                                    fontSize:18
                                                }
                                            }>
                                            {item.name}
                                        </Text>
                                        <Text
                                            style={
                                                {
                                                    color:COLORS.black,
                                                    fontSize:12
                                                }
                                            }>
                                            {item.desde} | {item.hora}
                                        </Text>
                                        <Text
                                            style={
                                                {
                                                    color:COLORS.black,
                                                    fontSize:16
                                                }
                                            }>
                                            {item.categoria}
                                        </Text>
                                    </View>
                                </View>



                            </TouchableOpacity>
                        )


                    }}
                />
            )
        }else {
            
            
            return (
               
                    <Animated.FlatList
                    alwaysBounceVertical
                    pagingEnabled
                    showsVerticalScrollIndicator={false}
                    data={places}
                    keyExtractor={item => `${item.id}`}
                    contentContainerStyle={{
                        alignItems: 'center',
                    }}
                    snapToAlignment="center"
                    // snapToInterval={Platform.OS === 'ios' ? PLACES_ITEM_SIZE + 28 : PLACES_ITEM_SIZE} //your element width
                    scrollEventThrottle={16}
                    decelerationRate={0}
                    bounces={false}
                    
                    renderItem={({ item, index }) => {
                        return(
                            <TouchableOpacity
                                style={{

                                    flexDirection:"row",
                                    alignItems:"center",
                                    // flexWrap:"wrap",
                                    padding:3,
                                    marginTop:10,
                                    borderRadius:SIZES.radius,
                                    backgroundColor:COLORS.lightGray2,
                                    paddingLeft:5,

                                    width:SIZES.width-20,

                                }}
                                onPress={ () => navigation.navigate('ProdDetailStack',             
                                {
                                    screen: 'ProdDetail',
                                         params: {
                                            ...item
                                    }      
                                    }
                          ) }
                            >
                                <View style={{
                                    width:SIZES.width-35,
                                    backgroundColor:COLORS.transparentgray,
                                    borderRadius:SIZES.radius
                                }}>
                                    <Image
                                        source={item.foto}
                                        resizeMode="cover"
                                        style={{width:140,height:140,borderRadius:SIZES.radius}}
                                    />

                                    {/*Informacion */}
                                    <View
                                        style={{
                                            position:"absolute",
                                            top:20,
                                            left:"35%",
                                            paddingHorizontal:SIZES.radius,
                                            paddingVertical:5,

                                        }
                                        }>
                                        <Text
                                            style={
                                                {
                                                    color:COLORS.black,
                                                    fontSize:18
                                                }
                                            }>
                                            {item.name}
                                        </Text>
                                        <Text
                                            style={
                                                {
                                                    color:COLORS.black,
                                                    fontSize:12
                                                }
                                            }>
                                            {item.desde} | {item.hora}
                                        </Text>
                                        <Text
                                            style={
                                                {
                                                    color:COLORS.black,
                                                    fontSize:16
                                                }
                                            }>
                                            {item.categoria}
                                        </Text>
                                    </View>
                                </View>



                            </TouchableOpacity>
                        )


                    }}
                />
              
                
            )
        }

    }
    return (
       
         <GradientBackground>                
             
            
            <View style={{ marginTop: 25 ,flex:0.75}}>
                
                {/* Carosel Principal */}
                <View style={{height:440}}>
                    
                {RenderExcursiones()}
                        {SlideTour()}
                </View>
                
            </View>
            <View style={{ flex:0.5}}> 
                    
                    {RenderPlaces()}
                </View> 
        </GradientBackground> 
    )
}
