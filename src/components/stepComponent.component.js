export const StepComponent = ({ noOfSteps, steps, components }) => {
  if (typeof components === 'object') {
    for (let index = 0; index < components.length || noOfSteps; index++) {
      switch (steps) {
        case steps:
          if (!components[steps]) {
            console.error(
              'Error:Number of steps are more than the components provided'
            )
            console.warn(
              'Fix: Add new components to match number of steps or assign the number of components provided '
            )
            console.warn(
              'Note: Number of steps should be one digit less of the number of components provided '
            )
            return null
          } else {
            return components[steps]
          }

        default:
          return components[0]
      }
    }
  } else {
    console.error('Uncaught Error: child must be an array of objects')
  }
}
