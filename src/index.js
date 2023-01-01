import React from 'react'
import PrimaryComponent from './components/primaryComponent.component'


export const ReactStepForm =({components,steps,setSteps,noOfSteps,width,height,indicatorActiveColor,indicatorInActiveColor})=>{
  return <PrimaryComponent setSteps={setSteps}  width={width} noOfSteps={noOfSteps} height={height} steps={steps} components={components} indicatorActiveColor={indicatorActiveColor} indicatorInActiveColor={indicatorInActiveColor} />
}

