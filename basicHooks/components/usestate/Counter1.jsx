import React from 'react'
import { useState } from 'react'






function Counter1() {
  let [currAge,setcurrAge]=useState(20)
  return (
    // <h1>dfghjkl</h1>
    <div style={{border:"3px dashed white",
    padding:"10px",
    margin:"20px"}}>
    
        <h1>C O U N T E R - 1</h1>
        <h4>Age:{currAge}</h4>
        <button onClick={()=>{
            setcurrAge(currAge+1)
        }}>Get older</button>

        <button onClick={()=>{
            setcurrAge(currAge-1)
        }}>Get younger</button>
        
        <button onClick={()=>{
            setcurrAge(currAge+10)
        }}>Get 10 years older</button>
    </div>
  )
}

export default Counter1