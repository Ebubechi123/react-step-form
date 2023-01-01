import React, { useState } from 'react'

import { ReactStepForm } from 'react-step-form'
// import 'react-step-form/dist/index.css'

const Test1=()=>{
  return <h1>Test1</h1>
}
const Test2=()=>{
  return <h1>Test2</h1>
}
const Test3=()=>{
  return <h1>Test3</h1>
}

const App = () => {
  const [steps,setSteps] = useState(0)
  const noOfSteps = 3
  return(
    <div style={{width:"70%",display:'flex',alignItems:'center',margin:"auto",padding:"23px 0px"}}>
      <ReactStepForm steps={steps} setSteps={setSteps} noOfSteps={noOfSteps}  components={[<Test1/>,<Test2/>,<Test3/>]}  />
    </div>
  )
}

export default App
