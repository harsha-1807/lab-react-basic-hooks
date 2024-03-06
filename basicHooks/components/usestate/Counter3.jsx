import React, { useContext, useState } from 'react'
import { AppContext } from '../useContext/ParentContext';

function Counter3() {
    const [data,setdata] = useState({age:20,sibling:3})
    const {DecreaseCount} = useContext(AppContext)
    function handleAge(){
        setdata({
            ...data,
            age: data.age + 1
                });
    }
    function handleSibling(){
        setdata({
            ...data,
            sibling: data.sibling + 1
                });
    }
    
    
  return (
    <div style={{border:"3px dashed white",
    padding:"10px",
    margin:"20px"}}>
        <h1>C O U N T E R 3</h1>
        <h4>Age : {data.age}</h4>
        <h4>Siblings : {data.sibling}</h4>
        <button onClick={handleAge}>Get older</button>

        <button onClick={handleSibling}>Get more siblings</button>
        <button onClick={DecreaseCount}>- maincount</button>
    
    </div>
  )
}

export default Counter3