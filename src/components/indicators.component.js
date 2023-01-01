import { IndicatorInnerCircle, IndicatorOuterCirlce, IndicatorWrapper, Line } from "./styles";
import React from 'react'
import { colors } from "../theme/colors";
import { useState } from "react";
import { useEffect } from "react";


const Indicator = ({steps,setSteps,components}) => {
    return ( 
            <IndicatorWrapper>
            
            {components.map((e,index)=>(
                 <SingleIndicator components={components} steps={steps} id={index} key={index} />
            ))}


        {/* <Line bg={steps>0 ? 'blue' :'lightgrey'}   height={"0.1px"} width={"40%"} resWidth={"40%"} /> */}

        {/* <IndicatorOuterCirlce   bg={steps>0 ? 'blue':'transparent'} border={steps>0 ?'none': `1px solid blue`} onClick={()=>{
        if(steps===0)
        {
        return steps;
        }
        else{
        setSteps(1)
        }

        }}  > 
        <IndicatorInnerCircle  bg={steps>0 ? 'white' : 'lighgrey' } />
        </IndicatorOuterCirlce> */}
{/* 
        <Line bg={steps>1 ? colorTheme.primary_color :colorTheme.black.light} height={"0.1px"} width={"40%"} resWidth={"40%"}/>

        <IndicatorOuterCirlce  bg={steps>1 ? colorTheme.primary_color :'transparent'} border={steps>1 ?'none': `1px solid ${colorTheme.primary_color}`}  >
        <IndicatorInnerCircle  bg={steps>1 ? 'white' : colorTheme.black.soft } />
        </IndicatorOuterCirlce> */}
            </IndicatorWrapper>
     )
}
 
export default Indicator;


{/* <IndicatorOuterCirlce onClick={()=>{
    setSlides(0)

}} >
<IndicatorInnerCircle />
</IndicatorOuterCirlce>

<Line bg={slides>0 ? colorTheme.primary_color :colorTheme.black.light}   height={"0.1px"} width={"40%"} resWidth={"40%"} />

<IndicatorOuterCirlce   bg={slides>0 ? colorTheme.primary_color :'transparent'} border={slides>0 ?'none': `1px solid ${colorTheme.primary_color}`} onClick={()=>{
if(slides===0)
{
return slides;
}
else{
setSlides(1)
}

}}  > 
<IndicatorInnerCircle  bg={slides>0 ? 'white' : colorTheme.black.soft } />
</IndicatorOuterCirlce>

<Line bg={slides>1 ? colorTheme.primary_color :colorTheme.black.light} height={"0.1px"} width={"40%"} resWidth={"40%"}/>

<IndicatorOuterCirlce  bg={slides>1 ? colorTheme.primary_color :'transparent'} border={slides>1 ?'none': `1px solid ${colorTheme.primary_color}`}  >
<IndicatorInnerCircle  bg={slides>1 ? 'white' : colorTheme.black.soft } />
</IndicatorOuterCirlce> */}



const SingleIndicator =({id,steps,components})=>{
    console.log(id)
    const [toggleDisplay,setToggleDisplay]= useState('block')

    let realLength = components.length - 1;
    console.log("ids:",id)
    console.log("Real lenght:",realLength)
    console.log("Component Length:",components.length)
    useEffect(()=>{
        let realLength = components.length - 1;
        if(id === realLength){
            setToggleDisplay('none')
        }
    },[])
    return (
        <IndicatorOuterCirlce displayAfter={toggleDisplay} bg={steps === id ? colors.primary_color : colors.inActive} id={id} >
    <IndicatorInnerCircle />
    </IndicatorOuterCirlce>
    )
}