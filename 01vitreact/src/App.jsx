 
import Dip from "./Dip.jsx"
 
function App(){
  
  const name='Dip'
   
  return (
    //  <h1>I am Dipongkar Barmon</h1>
    //<dip/> ->The tag <dip> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
    <>
       <Dip/> 
       <h3>You are ok,{name}!</h3>
    </>
  )
}

export default App
