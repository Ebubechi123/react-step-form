import {
  IndicatorInnerCircle,
  IndicatorOuterCirlce,
  IndicatorWrapper,
  Line
} from './styles'
import React from 'react'
import { colors } from '../theme/colors'
import { useState } from 'react'
import { useEffect } from 'react'

const Indicator = ({ steps, setSteps, components, IndicatorHandler }) => {

  return (
    <IndicatorWrapper>
      {components.map((e, index) => (
      <React.Fragment key={index} >
          <SingleIndicator
          components={components}
          IndicatorHandler={IndicatorHandler}
          setSteps={setSteps}
          steps={steps}
          id={index}
          key={index}
        />
    
      </React.Fragment>
      ))}
    </IndicatorWrapper>
  )
}

export default Indicator



const SingleIndicator = ({
  id,
  steps,
  setSteps,
  components,
  IndicatorHandler
}) => {
  const [toggleDisplay, setToggleDisplay] = useState('block')

  const StepsHandler = () => {
    if (IndicatorHandler) {
      IndicatorHandler()
    } else {
      return null
    }
  }
  useEffect(() => {
    let realLength = components.length - 1
    if (id === realLength) {
      setToggleDisplay('none')
    }
  }, [])
  return (
   <React.Fragment>
     <IndicatorOuterCirlce
      onClick={() => {
        StepsHandler()
      }}
      displayAfter={toggleDisplay}
      bg={steps >= id ? colors.primary_color : colors.inActive}
      id={id}
    >
      <IndicatorInnerCircle />
    </IndicatorOuterCirlce>
    <Line id={id} bg={steps >= id ? colors.primary_color : colors.inActive} display={toggleDisplay}  width={"100%"} resWidth={"40%"} />
   </React.Fragment>
  )
}
