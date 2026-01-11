import { useState } from 'react'
 

function App() {
  const [color, setColor] = useState('black')

  return (
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

       <div className=' fixed flex flex-wrap justify-around bottom-12 inset-x-0'>

        <div className=' h-18 bg-fuchsia-50 flex justify-center align-middle rounded-2xl shadow-lg'>

            <button onClick={()=>setColor('green')} className='rounded-2xl m-2 pl-5 pr-5 pb-1 pt-1 w-30  text-black font-medium font-serif text-2xl border-none' style={{backgroundColor:'green'}}>Green</button>
            
            <button onClick={()=>setColor('white')} className='rounded-2xl m-2 pl-5 pr-5 pb-1 pt-1 w-30 text-black font-medium font-serif text-2xl border-solid border border-black' style={{backgroundColor:'white'}}>White</button>

            <button onClick={()=>setColor('yellow')} className='rounded-2xl m-2 pl-5 pr-5 pb-1 pt-1 w-30  text-black font-medium font-serif text-2xl' style={{backgroundColor:'yellow'}}>Yellow</button>

            <button onClick={()=>setColor('black')} className='rounded-2xl m-2 pl-5 pr-5 pb-1 pt-1 w-30 text-white font-medium font-serif text-2xl' style={{backgroundColor:'black'}}>Black</button>

            <button onClick={()=>setColor('blue')} className='rounded-2xl m-2 pl-5 pr-5 pb-1 pt-1 w-30 text-black font-medium font-serif text-2xl border-none' style={{backgroundColor:'blue'}}>Blue</button>

            <button onClick={()=>setColor('gray')} className='rounded-2xl m-2 pl-5 pr-5 pb-1 pt-1 w-30 text-black font-medium font-serif text-2xl border-none' style={{backgroundColor:'gray'}}>Gray</button>

            <button onClick={()=>setColor('red')} className='rounded-2xl m-2 pl-5 pr-5 pb-1 pt-1 w-30 text-black font-medium font-serif text-2xl border-none' style={{backgroundColor:'red'}}>Red</button>

        </div>
      </div>
     </div>
  )
}

export default App
