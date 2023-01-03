import React from 'react'
import { useEffect } from 'react'
import PrimaryComponent from './components/primaryComponent.component'

export const ReactStepForm = ({
  components,
  steps,
  setSteps,
  noOfSteps,
  width,
  height,
  indicatorActiveColor,
  indicatorInActiveColor
}) => {
  useEffect(() => {
    if (!noOfSteps) {
      console.error('Uncaught Error : Number of steps not assigned a value')
      console.warn(
        'Fix : Assign value greater than 0 to number of steps \n let noOfSteps = 2'
      )
    }
  }, [])
  return (
    <React.Fragment>
      {!noOfSteps ? null : (
        <PrimaryComponent
          setSteps={setSteps}
          width={width}
          noOfSteps={noOfSteps}
          height={height}
          steps={steps}
          components={components}
          indicatorActiveColor={indicatorActiveColor}
          indicatorInActiveColor={indicatorInActiveColor}
        />
      )}
    </React.Fragment>
  )
}

export const Prev = (steps, setSteps) => {
  if (steps <= 0) {
    console.error('Error:Cannot move backwards')
    return steps
  } else {
    setSteps(steps - 1)
  }
}

export const Next = (steps, setSteps, noOfSteps) => {
  // console.log(steps)
  if (steps < noOfSteps) {
    setSteps((prevsate) => prevsate + 1)
  } else if (steps > noOfSteps) {
    console.error('Error:Cannot move forward due to the exhaustion of steps')
    console.warn('Fix: Add new steps in order to mve forward')
    return steps
  } else {
    return steps
  }
}
