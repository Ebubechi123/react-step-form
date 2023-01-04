import { createContext, useContext, useState } from "react";
import React from 'react'

const StateContext = createContext();

export const StateProvider =({children})=>{
    const [componentLength,setComponentLength] = useState(0)
    return(
        <StateContext.Provider value={[componentLength,setComponentLength]} >
                {children}
        </StateContext.Provider>
    )
}

export const StateStore =()=>{
    return useContext(StateContext)
}