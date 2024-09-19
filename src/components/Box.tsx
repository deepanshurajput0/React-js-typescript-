import React, { Dispatch, SetStateAction } from "react"
import { useContext } from "react";
import { ThemeContext } from "../App";

type InputValue = string | number;
const Box = <T extends InputValue>({label,value,setter}:
  {label:string;
    value:T;
    setter:Dispatch<SetStateAction<T>>
  }) => {
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(value)
    }

    const { theme, toggleTheme } = useContext(ThemeContext)
    console.log(theme)
  return (

   <form onSubmit={handleSubmit} >
   <label>{label}</label>
   <input type="text" value={value} onChange={(e)=>setter(e.target.value as T )} />
   <button  onClick={toggleTheme} >Submit</button>
   </form>
  )
}

export default Box