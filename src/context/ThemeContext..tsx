import React, { createContext, useContext, useState } from "react";

interface CounterProviderProps{
  children:React.ReactNode
}

const CounterContext = createContext<CounterContextValue | null >(null)

interface CounterContextValue{
  value:number,
  setCount:(num:number)=>void
}

export const useCounter =()=>{
  return useContext(CounterContext)
}

export const CounterProvider:React.FC<CounterProviderProps> =(props)=>{
  const [count,setCount] = useState<number>(1)
  return(
    <CounterContext.Provider  value={{
      value:count,
      setCount,
    }} >
       {props.children}
    </CounterContext.Provider>
  )
}