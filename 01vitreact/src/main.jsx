 
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

function MyApp(){
   return (
      <h1>Hello my wife</h1>
   )
}

// const ReactElement={
//    type:'a',
//    props:{
//       href:'http://google.com',
//       target:'_black'
//    },
//    children:"click here"
// }

const anthorElement=(
   <h1>Hello my wife</h1>
)

const anthoruser='Dip'

const ReactElement=React.createElement(
   'a',
   {
      href:'http://google.com',
      target:'_blank'
   },
   "Click to visit google",
   anthoruser
)

createRoot(document.getElementById('root')).render(
 
   //   {/* <MyApp/> */}
   //   {/* <ReactElement/>  it not work it's not proparty of react*/}
     //anthorElement
    // ReactElement

    <App/>
  
)