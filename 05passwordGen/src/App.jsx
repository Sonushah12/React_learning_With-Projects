import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);  
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const passwordgenrater = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed)str += "1234567890"

    if(charAllowed) str += "! @ # $ % ^ & * ( ) _ + - = { } [ ] : ; \" ' < > , . / \ | ~ ` ? ¡ ¿";

    for (let i = 1; i <=length; i++){
      let char = Math.floor(Math.random()*str.length+1);

      pass +=str.charAt(char);
     
    }

    setPassword(pass);


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordgenrater();
  },[length, numberAllowed,charAllowed, passwordgenrater]);

  return (
    <>
    
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
     <h1 className='text-white text-center'>Paasword genrater</h1>
        <div className='flex shadow rounded overflow-hidden mb-4 my-3'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
          <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>legnth : {length}</label>
          </div>

          <div>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>
                !prev);
            }}
            className='cursor-pointer'
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          
          <div>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='numberInput'
            onChange={()=>{
              setCharAllowed((prev)=>
                !prev);
            }} 
            className='cursor-pointer'
            />
            <label htmlFor='charInput'>Charactors</label>
          </div>
        </div>

     </div>

    </>
  )
}

export default App
