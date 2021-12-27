import React, { useEffect, useState } from 'react'
import { reservados } from '../API/api_user'
import { DatosExcursiones, DatosUser, Activity } from '../interfaces/reservadoInterface';
import { excursiones } from '../API/api_excursiones';



interface ItinerarioState {
    reserva:DatosUser[];
    excursion:DatosExcursiones[];
   
    
}
export const useItinerario = () => {
    const [ ItinerState, setItinerState ] = useState<ItinerarioState>({
        reserva:[],
        excursion:[],
        
       

    })
    const getItiner = () => {
        
     

         setItinerState({
            reserva:reservados,
            excursion:excursiones
            
            
        }) 
        
        
     
     
      
    }

   
    useEffect(() => {
        // now_playing
        getItiner();

    }, [])

    

    return {
        ...ItinerState      
    }
}
