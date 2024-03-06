import { createContext, useState } from "react";


export const AppContext  = createContext()

const ParentContext = ({children}) =>{
    
const [MainCount,setMainCount] = useState(5000);

    const IncreaseCount =()=>{
        setMainCount(MainCount + 1000)
    }

    const DecreaseCount =()=>{
        setMainCount(MainCount - 1000)
    }

    return <AppContext.Provider value={{MainCount,setMainCount,DecreaseCount,IncreaseCount}}> 
        {children}
    </AppContext.Provider>
}

export default ParentContext;