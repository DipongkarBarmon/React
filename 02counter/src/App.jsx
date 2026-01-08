
import {useState} from 'react'

import './App.css'

function App() {
  
  let [count,setCount]=useState(0)
 
  const addvalue=()=>{
     //console.log("add value",Math.random())
     count=count+1;
     //console.log(count)
     setCount(count)
  }
  const removevalue=()=>{
     count--;
     if(count<0) count=0;
     setCount(count)
  }
  const resetvalue=()=>{
      count=0;
      setCount(count)
  }
  return (
    <>
      <h1>Hello, Dipongkar!</h1>
      <h2>Count value : {count}</h2>
      <button onClick={addvalue}>Add value</button>
      <button onClick={removevalue}>Remove value</button>
      <br/>
      <br/>
      <button onClick={resetvalue}>Reset value</button>
    </>
  )
}

export default App
