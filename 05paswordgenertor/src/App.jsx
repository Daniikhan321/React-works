import React, {useState, useCallback, useEffect, useRef} from 'react'

export default function App() {
  const [lenght, setlength] = useState(8)
  const [numallow, setnumallow] = useState(false)
  const [carallow, setallow] = useState(false)
  const [password, setpassword] = useState('')
  const passwordref = useRef(null)  
  const generatepassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallow) str += "0123456789"
    if(carallow) str += "!@#$%^&*()-+"  
    for(let i=1; i <= lenght; i++){
      let char = Math.floor(Math.random() * str.length +1)

      pass += str.charAt(char)
   
  }
  
  setpassword(pass)

 }, [lenght, numallow, carallow, setpassword]) 
  const copyPaswordToClipboard = useCallback(() => {
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0, 10)
    passwordref.current?.focus()
    passwordref.current?.blur()
    window.navigator.clipboard.writeText(password)
  },[password])
 
    
 useEffect(() => {
    generatepassword()
  }, [lenght, numallow, carallow, setpassword , generatepassword])


  return (
    <>
    <div className='w-full max-w-md rounded-lg mx-auto px-4 my-8 text-orange-500 text-center shadow-lg bg-gray-800'>
     pasword genertor
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      className='outline-none py-1 px-3 w-full bg-white my-3 rounded-lg'
      value={password}
      readOnly
      placeholder='pasword'
      ref={passwordref}
         />
         <button className='bg-blue-700 outline-none px-3 py-3 text-white shrink-0 rounded-lg my-3'
          onClick={() => {copyPaswordToClipboard()}}
         >copy</button>
     </div>
     <div className='flex gap-x-2 mb-4'>
      <div className='flex items-center mb-4 gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={lenght}
        className='cursor-pointer'
        onChange={(e) => {setlength(e.target.value)}}
        />
        <label> Length: {lenght}</label>


        <input type="checkbox"
        defaultChecked={numallow}
        id='numinput'
        onChange={() => {setnumallow((prev) => !prev)}}
         />
        <label> Numbers </label>
      </div>
      <div className='flex items-center mb-4 gap-x-1'>
        <input type="checkbox"
        defaultChecked={carallow}
        onChange={() => {setallow((prev) => !prev)}}
         />
        <label>characters </label>
        
      </div> 
     </div>
    </div>
    </>
  )
}
