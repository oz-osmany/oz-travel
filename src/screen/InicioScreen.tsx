import { StackNavigationProp } from '@react-navigation/stack'
import React,{useState,useRef, useEffect} from 'react'
// import { useForm } from "react-hook-form";
import { Animated, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { TopNavigatorParamsList } from '../types/types'
import styles from '../assets/theme';





import  {images} from'../assets/index';

export interface InicioProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'Inicio'>
  }
  
export const InicioScreen = ({navigation}) => {

  const logoTrans = useRef(new Animated.Value(0)).current
  const lineaVertical=useRef(new Animated.Value(0)).current
  const lineaHorizontal=useRef(new Animated.Value(0)).current
  const OzTools=useRef(new Animated.Value(0)).current
  const travel=useRef(new Animated.Value(0)).current
  const Travel=useRef(new Animated.Value(0)).current
  
  useEffect(() => {
    
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(logoTrans, {
    toValue: -100,
    duration: 1100,
    useNativeDriver: false
}).start();
    Animated.timing(lineaVertical, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: false
    }).start();
    Animated.timing(lineaHorizontal, {
      toValue: -200,
      duration: 1000,
      delay:1000,
      useNativeDriver: false
    }).start();
    Animated.timing(OzTools, {
      toValue: 1,
      duration: 1000,
      delay:2000,
      useNativeDriver: false
    }).start();
     Animated.timing(travel, {
      toValue: 1,
      duration: 1000,
      delay:2500,
      useNativeDriver: false
    }).start();
     Animated.timing(Travel, {
      toValue: 1,
      duration: 1000,
      delay:2500,
      useNativeDriver: false,

      
    }).start(()=>{
      Animated.loop(
      
      Animated.sequence([
         
        Animated.timing(Travel, {
          toValue: 0,          
          duration: 600,               
          // delay:2500,
          useNativeDriver: false
        }),
        Animated.timing(Travel, {
          toValue: 1,
          duration: 600,             
          // delay:2500,
          useNativeDriver: false
        })
      ]) ,{
          iterations:3,
          
        }
    

     
    ).start();
    });
    
    

  }, [])
  

    return (
        <View style={styless.layout}>
            <View style={styless.cajaTop}>
              <Animated.View style={{
                 
                transform:[{translateX:logoTrans}]
              }}>

              <Image 
              source={images.oz}
              style={styless.logo}
              
              />
              </Animated.View>
              <Animated.View style={[{...styless.vertical,opacity:lineaVertical}]}/>
              <Animated.View style={[{...styless.horizontal,transform:[{translateX:lineaHorizontal}]}]}/>
              <Animated.Text style={[{...styless.oztools,opacity:OzTools}]}>OzTools</Animated.Text>
              <Animated.Text style={[{...styless.travel,opacity:travel}]}>for your </Animated.Text>
              <Animated.Text style={[{...styless.Travel,opacity:Travel}]}>Travels</Animated.Text>
            </View>
            <View style={{top:50}}>
              <TextInput  placeholder="User name" placeholderTextColor="gray"  style={styless.inputs}/>
              <TextInput  placeholder='Password'placeholderTextColor="gray"  style={styless.inputs}/>
              <TouchableOpacity 
              style={styless.button} 
              onPress={()=>navigation.navigate("Tabs")}
              >
                <Text style={{textAlign:"center",fontSize:20,color:"white"}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
                
             
       
      
        </View>
    )
}
const styless = StyleSheet.create({
  layout:{
    backgroundColor:"#263DB4",
    flex:1
  },
  cajaTop:{
    flex:0.85,
    backgroundColor:styles.COLORS.white,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30
  },
  logo:{
    height:85,
    width:150,
    top:300,
    left:140,
    
  },
  inputs:{
    backgroundColor:"white",
    width:"70%",
    height:35,
    marginLeft:"auto",
    marginRight:"auto",
    // top:10,
    marginBottom:20,
    
  },
  button:{
    width:"70%",
    height:35,
    marginLeft:"auto",
    marginRight:"auto",
    // marginTop:10,
    backgroundColor:"rgba(192, 192, 192,0.7)"
  },
  vertical:{
    height:100,width:0.5,backgroundColor:"black",left:200,top:200
  },
  horizontal:{
    height:0.5,width:200,backgroundColor:"black",left:403,top:150
  },oztools:{
    color:"black",left:203,top:104,fontSize:38,fontWeight:"100"
  },
  travel:{
    color:"black",left:203,top:104,fontSize:20,fontWeight:"100"
  },
  Travel:{
    color:"black",left:275,top:78,fontSize:20,fontWeight:"100"
  }
})