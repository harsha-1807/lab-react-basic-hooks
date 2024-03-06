import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './Context';

const Content = () => {

//use State

let [count,setCount]=useState(0)
let [displayPara, setDisplayPara] = useState(false);
let {darkTheme,setDarkTheme}= useContext(AppContext)


const IncreaseCount=()=>{
  setCount(count+1)
}

const DisplayPara=()=>{
  alert("Content button clicked")
  setDisplayPara(!displayPara);
}

const Theme=()=>{
  setDarkTheme(!darkTheme);
}

//use Effect

useEffect(() => {
    return()=>{
        console.log(count)
    }
   ;
  },[count]); 

  return (
    <div>
       <div>
      <button style={{marginBottom:"50px",
                     border:"2px solid #999999",}}
              onClick={Theme}>Toggle</button>
    </div>

    <div style={{backgroundColor:darkTheme?"#000000":"#e2dada",
                 color:darkTheme?"white":"black",
                 width:"70vw",
                 padding:"50px",
            
    }}>

      <p style={{display: displayPara ? "block" : "none"}}>Hi.Now the content is visible</p>
      <button onClick={DisplayPara}>Content</button>
      <h3>{count}</h3>
      <button onClick={IncreaseCount}>Like</button>
     </div>
    </div>
    
  )
}

export default Content
