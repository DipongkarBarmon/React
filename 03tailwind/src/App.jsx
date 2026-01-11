import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
 

  const myobj={
    name:'Dip',
    age:21,
    addree:"Panchagarh"
  }

  let myarr=[1,3,4,5,6]

  return (
    <>
      <h1 className=' bg-white text-black rounded-2xl'>Tailwind Css</h1>
      <div class="m-3 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
      <div>
        <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
        <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
      </div>
    </div>
    <Card channel='Hello' someobj={myarr}/>
    <Card/>
    </>
    
  )
}

export default App
