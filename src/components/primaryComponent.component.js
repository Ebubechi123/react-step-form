import { StepComponent } from './stepComponent.component'
import { Wrapper } from './styles.js'

import React from 'react'
import Indicator from './indicators.component'
const PrimaryComponent = ({
  steps,
  components,
  width,
  height,
  noOfSteps,
  setSteps,
  IndicatorHandler
}) => {
  return (
    <React.Fragment>
      <Wrapper width={width} height={height}>
        <Indicator
          setSteps={setSteps}
          steps={steps}
          noOfSteps={noOfSteps}
          IndicatorHandler={IndicatorHandler}
          components={components}
        />
        <StepComponent
          steps={steps}
          components={components}
          noOfSteps={noOfSteps}
        />
      </Wrapper>
    </React.Fragment>
  )
}

export default PrimaryComponent
