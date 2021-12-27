import React, { useState,useEffect } from 'react';
import {reservados} from '../API/api_user';



export const useItinerarioDetail = ( itiId: number) => {

    const [state, setstate] = useState([]);

    useEffect(() => {
        getItinerarioDetail();
    }, [])

    const getItinerarioDetail=()=>{
        const resultado=reservados[0];
    }
    return {
        ...state
    }
}
