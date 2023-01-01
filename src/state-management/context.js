import { createContext, useContext, useState } from "react";
import React from 'react'

const StateContext = createContext();

export const StateProvider =({children})=>{
    const [steps,setSteps] = useState(0)
    return(
        <StateContext.Provider value={[steps,setSteps]} >
                {children}
        </StateContext.Provider>
    )
}

export const StateStore =()=>{
    return useContext(StateContext)
}