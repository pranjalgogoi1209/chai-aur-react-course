import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // useCallback hook
  // useCallback is a hook, it lets you cache a function definition between re-render
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="~!@#$%^&*()_?"
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
    
  }, [length, numberAllowed, charAllowed, setPassword])

  // useEffect hook
  // manage rendering : If something change in dependecies then re render
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // useReff hook
  // To take reference of password and customize anything we want
  const passwordRef = useRef(null)
  
  const copyPasswordToClipboard = useCallback(() => {
    // ? : selecting the reference optionally
    passwordRef.current?.select()
    // we can select the range how many characters we want to select to copy
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-blue-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} placeholder='password' readOnly className='outline-none w-full py-1 px-3' ref={passwordRef}/>
          <button className='bg-blue-500 outline-none text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>COPY</button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={20} value={length} className='cursor-pointer'  onChange={e=>{setLength(e.target.value)}}/>
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed(prev => !prev)}}/>
            <label htmlFor='numberInput'>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{setCharAllowed(prev => !prev)}}/>
            <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
