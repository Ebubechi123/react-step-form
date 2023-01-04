import {
  IndicatorInnerCircle,
  IndicatorOuterCirlce,
  IndicatorWrapper,
  Line
} from './styles'
import React, { useRef } from 'react'
import { colors } from '../theme/colors'
import { useState } from 'react'
import { useEffect } from 'react'

const Indicator = ({
  steps,
  setSteps,
  components,
  IndicatorHandler,
  indicatorActiveColor,
  indicatorInActiveColor
}) => {
  return (
    <IndicatorWrapper>
      {components.map((e, index) => (
        <React.Fragment key={index}>
          <SingleIndicator
            components={components}
            IndicatorHandler={IndicatorHandler}
            setSteps={setSteps}
            steps={steps}
            id={index}
            key={index}
            indicatorActiveColor={indicatorActiveColor}
            indicatorInActiveColor={indicatorInActiveColor}
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
  indicatorActiveColor,
  indicatorInActiveColor,
  components,
  IndicatorHandler
}) => {
  const [toggleDisplay, setToggleDisplay] = useState('block')
  const ind = useRef(null)
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
  useEffect(() => {
    if (steps === id) {
      ind.current.scrollIntoView()
    }
  }, [steps])
  return (
    <React.Fragment>
      <IndicatorOuterCirlce
        ref={ind}
        onClick={() => {
          StepsHandler()
        }}
        displayAfter={toggleDisplay}
        bg={
          steps >= id
            ? indicatorActiveColor || colors.primary_color
            : indicatorInActiveColor || colors.inActive
        }
        id={id}
      >
        <IndicatorInnerCircle />
      </IndicatorOuterCirlce>
      <Line
        id={id}
        bg={
          steps >= id
            ? indicatorActiveColor || colors.primary_color
            : indicatorInActiveColor || colors.inActive
        }
        display={toggleDisplay}
        width={'100%'}
        resWidth={'40%'}
      />
    </React.Fragment>
  )
}
