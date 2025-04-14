import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
//  let counter = 15
 const addvalue = () => {
  if(counter<20){
    console.log("value added", counter);
    counter = counter+1; 
    setCounter(counter)
  }
  else{
    console.log("canot go above twenty:")
  }
 
 }
 const removevalue = () => {
  if(counter > 0){
    counter = counter-1;
    setCounter(counter)
  }
  else{
    console.log("connot go below zero:")
  }
 
 }

  return (
    <>
     <h1>chaii or react</h1>
     <h2>couter value: {counter}</h2>
     <button onClick={addvalue}
     >Add value {counter}</button><br/>
     <button onClick={removevalue}
     >Remove value</button>
   
    </> 
  )
}

export default App
