import { useState, useCallback, useEffect ,useRef } from 'react'
 
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef =useRef(null)

  const generatePassword = useCallback(() => {
    let password = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += '0123456789'
    }
    if (characterAllowed) {
      str += '@#$%&*!'
    }
    
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      password += str.charAt(index)
    }
    setPassword(password);
  }, [length, numberAllowed, characterAllowed])
  
  const clickToCopyPasswort=useCallback(()=>{
     passwordRef.current.select()
     window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,characterAllowed,generatePassword])
  
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <div className='mb-6'>
        <h1 className='text-white font-bold text-4xl text-center tracking-wider'>Password Generator</h1>  
      </div>

      <div className='w-full max-w-md bg-gray-700 px-6 py-8 rounded-xl shadow-2xl'>
        
        <div className='flex items-center mb-6 overflow-hidden rounded-lg shadow-lg'>
          <input 
            type="text" 
            value={password} 
            placeholder='Generated Password' 
            readOnly
            ref={passwordRef}
            className='outline-none w-full py-2.5 px-4 text-gray-800 font-medium text-lg bg-white'
          />
          <button  onClick={clickToCopyPasswort}
            className='outline-none bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 font-semibold shrink-0 transition-colors duration-200'
          >
            Copy
          </button>
        </div>

      
        <div className='flex flex-col gap-4 text-white'>
           
          <div className='flex items-center gap-3'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer flex-1 h-2 bg-gray-500 rounded-lg appearance-none'
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='font-medium text-orange-400 min-w-[80px]'>Length: {length}</label>
          </div>

     
          <div className='flex gap-6'>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                className='cursor-pointer w-4 h-4'
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                  if (!numberAllowed) setCharacterAllowed(false)
                }}
              />
              <label htmlFor="numberInput" className='cursor-pointer font-medium'>Numbers</label>
            </div>
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={characterAllowed}
                id="characterInput"
                className='cursor-pointer w-4 h-4'
                onChange={() => {
                  setCharacterAllowed((prev) => !prev)
                  if (!characterAllowed) setNumberAllowed(false)
                }}
              />
              <label htmlFor="characterInput" className='cursor-pointer font-medium'>Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
