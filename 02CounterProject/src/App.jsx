import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const addValue = ()=>{
  setCount(count+1);
  console.log(count);
}


const removeValue = ()=>{
  if(count==0){
    return;
  }
  setCount(count-1);
  console.log(count)
}

const makeNull = ()=>{
  setCount(0)
}

  return (
    <>
    <h1>Hello Vite + React!</h1>
    <h2>Counter Value : {count}</h2>
    <button onClick={addValue}>Add value : {count}</button><br />
    <button onClick={removeValue}>remove Value</button><br />
    <button onClick={makeNull}>Make Null</button>
    </>
  )
}

export default App
