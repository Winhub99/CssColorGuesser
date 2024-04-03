
import { useEffect, useState } from 'react'
import './App.css'
import { generateHexColor } from './util'

function App() {

  const [color,setColor] = useState("")
  const [options,setOptions] = useState<string[]>([])
 const [match,setMatch] = useState<boolean> (false)

 const generateNewSet=()=>{
  const actualColor = generateHexColor()
  setColor(actualColor)
  setOptions([actualColor,generateHexColor(),generateHexColor()].sort(()=>(0.5 - Math.random())))
 }
  useEffect(()=>{
    generateNewSet()
  },[])
  const handleAnswer=(answer:string)=>{

    if(answer===color){
      //todo: correct answer logic
      console.log("are equal")
      setMatch(true)
      generateNewSet()
    }else{
      setMatch(false)      
    }

  }
  return (
    <div className='container'>
      <div>
      <div className="guess-me" style={{background:color}}></div>
      <div className='buttons'>
        {options.map(option=>(<button key={option} onClick={()=>handleAnswer(option)}>{option}</button>))}  
      </div>
      
        {match===true &&<div className='message' style={{color:"green"}}>Correct!</div> }
        
        {match===false &&<div className='message' style={{color:"red"}}>Incorrect!</div> }
      
      </div>  
    </div>
  )
}

export default App
