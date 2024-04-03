
import { useEffect, useState } from 'react'
import './App.css'
import { generateHexColor } from './util'

function App() {

  const [color,setColor] = useState("")
  const [options,setOptions] = useState<string[]>([])
 const [match,setMatch] = useState<boolean> (false)
 const [score,setScore]= useState(0)
 const [displayMessage, setDisplayMessage] = useState(false)

 const generateNewSet=()=>{
  const actualColor = generateHexColor()
  setColor(actualColor)
  setOptions([actualColor,generateHexColor(),generateHexColor()].sort(()=>(0.5 - Math.random())))
 }
  useEffect(()=>{
    generateNewSet()
  },[])
  const handleAnswer=(answer:string)=>{
    setDisplayMessage(true)
    if(answer===color){
      //todo: correct answer logic
      console.log("are equal")
      setMatch(true)
      console.log(score)
      setScore(prev => prev + 1)
      generateNewSet()
    }else{
      setMatch(false)      
    }

  }
  return (
    <div className='container'>
      <div>
        <h1 style={{textAlign:'center',marginBottom:"0"}}>Score</h1>
        <div className='score'>{score}</div>
      <div className="guess-me" style={{background:color}}></div>
      <div className='buttons'>
        {options.map(option=>(<button key={option} onClick={()=>handleAnswer(option)}>{option}</button>))}  
      </div>
      
        {displayMessage && match===true &&<div className='message' style={{color:"green"}}>Correct!</div> }
        
        {displayMessage && match===false &&<div className='message' style={{color:"red"}}>Incorrect!</div> }
      
      </div>  
    </div>
  )
}

export default App
