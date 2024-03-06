import React, { Component, useContext, useEffect } from 'react'
import { useState } from 'react'
import { AppContext } from '../useContext/ParentContext'





function Counter4() {
    useEffect(()=>{
        return()=>{
    
            console.log("c4 unmounted")
        }
    },[])

  const {IncreaseCount} = useContext(AppContext)
  let [age,setAge]=useState(20)
  let [sib,setSib]  = useState(0)
  return (
    
    <div style={{border:"3px dashed white",
    padding:"10px",
    margin:"20px"}}>
        <h1>C O U N T E R - 4</h1>
        <h4>Age : {age}</h4>
        <h4>Sibling :{sib}</h4>
        <button onClick={()=>{
            setAge((prev)=>prev + 1)
        }}>Get older</button>

        <button onClick={()=>{
            setSib((prev)=>prev + 1)
        }}>Increase siblings</button>
        <button onClick={()=>{
            setAge((prev) => 0)
            setSib((prev)=> 0)
        }}>reset</button>
       <button onClick={IncreaseCount}>+ maincount</button>
        </div>
  )
}

export default Counter4;