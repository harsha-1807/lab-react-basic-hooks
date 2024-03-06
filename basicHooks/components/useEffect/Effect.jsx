import React, { Component, useEffect } from 'react'
import { useState } from 'react'

// Life Cycle of Components
//   - Mount
//   - Update
//   - Unmount

//   1. If we dont give any dependancy array [] or second parameter -> useEffect will run whenever the component re-renders

//   useEffect(() => {
//     // write code
//   });

//   2. If we give an empty dependancy array [] in second parameter -> useEffect will run when ever the component mounts or renders for the first time only .

//   useEffect(() => {
//     // write code
//   },[]);


//   3. If we give a state as dependancy array [name] in second parameter -> useEffect will run when ever the state changes (setState) . we can give a dependancy array of multiple states [ name , age ,....]


//   useEffect(() => {
//     // write code
//   },[name]);

//   useEffect(() => {
//     // write code
//   },[name,age]);

//   4. If we return a callback function inside useEffect the callback function will run when the component is about to unmount
  
//   useEffect(() => {    
//     return ()=>{
//         console.log("Component Unmounted");
//     }
//   },[]);


function Effect() {
    const [count,setcount] = useState(0)
    const [age,setage] = useState(30)


    useEffect(()=>{
        console.log("component Re-renders")
        console.log(count);
        console.log(age);
   
         
   
       },[age,count]);

       useEffect(()=>{
       
        return()=>{
            console.log("unmounted")
        }
   
         
   
       },[]);
    


  return (
    <div style={{border:"3px dashed white",
    padding:"10px",
    margin:"20px"}}>
        <h1>u s e E F F E C T</h1>
       <h3>Count : {count}</h3>
       <h3>Age : {age}</h3>
       <button onClick={()=>{
        setcount(count+1)
    }}>+</button> 
    <button onClick={()=>{
        setage(age-1)
    }}>-  age</button> 
       
    </div>
  )
}

export default Effect