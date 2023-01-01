export const StepComponent = ({noOfSteps, steps,components }) => {
    if (typeof components === "object") {
      for (let index = 0; index < components.length || noOfSteps; index++) {
        switch (steps) {
          case steps:
            return components[steps];
  
          default:
            return components[0];
        }
      }
    } else {
      console.error("ERROR: child must be an array of objects");
    }
  };
  