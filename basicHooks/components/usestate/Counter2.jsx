import React, { Component, useContext, useEffect } from 'react'
import { useState } from 'react'
import { AppContext } from '../useContext/ParentContext'





function Counter2() {
    
    
    useEffect(()=>{
        console.log("c2 mounted")
    },[])
    
    let [currAge,setcurrAge]=useState(20)
    let [sib,setcurrsib]  = useState(0)
    const {MainCount} = useContext(AppContext)
    return (
    
    <div style={{border:"3px dashed white",
    padding:"10px",
    margin:"20px"}}>
        <h1>C O U N T E R - 2</h1>
        <h4> My current Age is {currAge}</h4>
        <h4>Siblings:{sib}</h4>
        <h3>Maincount:{MainCount}</h3>
        <button onClick={()=>{
            setcurrAge(currAge+1)
        }}>Get older</button>

        <button onClick={()=>{
            setcurrsib(sib + 1)
        }}>Increase siblings</button>
        <button onClick={()=>{
            setcurrsib(sib - 1)
        }}>decrease siblings</button>
        </div>
  )
}

export default Counter2