import React, { useEffect, useState } from 'react'
import './App.css'

export const App = () => {
  const [advice, setAdvice]= useState("Pleace click button and wait few second's")
  const [count, setCount] = useState(0)

async function getAdvice(){
  const res =  await fetch("https://api.adviceslip.com/advice")
  console.log(res);
  const data = await res.json();
  console.log(data)
  setAdvice(data.slip.advice);
  setCount( count + 1);
}
useEffect(function(){
  getAdvice()
},[])  
  
  return (
    <div>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice</button>
      <p>You Have read <b>{count}</b> Pieces of Advice</p>
    </div>
  )
}


export default App

