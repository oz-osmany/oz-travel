import React, { useEffect, useState } from 'react'
import { reservados } from '../API/api_user'
import { DatosUser } from '../interfaces/reservadoInterface';


interface ItinerarioState {
    reserva:DatosUser[];
}
export const useProduct = () => {
    const [ ItinerState, setItinerState ] = useState<ItinerarioState>({
        reserva:[],
    })
    const getItiner = () => {
        
        

        setItinerState({
            reserva:reservados
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
