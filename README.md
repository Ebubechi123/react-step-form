# react-step-form

> react-step-form built using react for react projects

[![NPM](https://img.shields.io/npm/v/@ebubechi_ihediwa/react-step-form.svg)](https://www.npmjs.com/package/@ebubechi_ihediwa/react-step-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @ebubechi_ihediwa/react-step-form
```

## Usage

```jsx
import React, { useState } from 'react'

import { ReactStepForm, Prev, Next } from '@ebubechi_ihediwa/react-step-form'
const Test1 = ({ steps, setSteps, noOfSteps }) => {
  return (
    <>
      <h1>Test1</h1>
      <button
        onClick={() => {
          Prev(steps, setSteps)
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          Next(steps, setSteps, noOfSteps)
        }}
      >
        Next
      </button>
    </>
  )
}
const Test2 = ({ steps, setSteps, noOfSteps }) => {
  return (
    <>
      <h1>Test2</h1>
      <button
        onClick={() => {
          Prev(steps, setSteps)
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          Next(steps, setSteps, noOfSteps)
        }}
      >
        Next
      </button>
    </>
  )
}
const Test3 = ({ steps, setSteps, noOfSteps }) => {
  return (
    <>
      <h1>Test3</h1>
      <button
        onClick={() => {
          Prev(steps, setSteps)
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          Next(steps, setSteps, noOfSteps)
        }}
      >
        Next
      </button>
    </>
  )
}
const Test4 = ({ steps, setSteps, noOfSteps }) => {
  return (
    <>
      <h1>Test4</h1>
      <button
        onClick={() => {
          Prev(steps, setSteps)
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          Next(steps, setSteps, noOfSteps)
        }}
      >
        Next
      </button>
    </>
  )
}

const App = () => {
  const [steps, setSteps] = useState(0)
  const noOfSteps = 3
  const components = [
    <Test1 steps={steps} setSteps={setSteps} noOfSteps={noOfSteps} />,
    <Test2 steps={steps} setSteps={setSteps} noOfSteps={noOfSteps} />,
    <Test3 steps={steps} setSteps={setSteps} noOfSteps={noOfSteps} />,
    <Test4 steps={steps} setSteps={setSteps} noOfSteps={noOfSteps} />,
  ]

  return (
    <div
      style={{
        width: '70%',
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        padding: '23px 0px'
      }}
    >
      <ReactStepForm
        steps={steps}
        setSteps={setSteps}
        noOfSteps={noOfSteps}
        components={components}
      />
    </div>
  )
}

export default App

```

## License

MIT © [Ebubechi123](https://github.com/Ebubechi123)
