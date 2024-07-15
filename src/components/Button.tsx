import React from "react"
import { useState } from "react"
import { useCounter } from "../context/ThemeContext."
interface Btn {
    name:string,
    onClick?:()=>void
}

interface Book {
  name:string,
  price:number
}

const Button:React.FC<Btn> = (props) => {
  const [value,setValue] = useState<string | undefined >()
  const [newData,setnewData] = useState<string | undefined >()
  const context  = useCounter()
  const handleNameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setValue(e.target.value)
  }
  // const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
  //    e.preventDefault()
  //    setnewData(value)
  // }
  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent form submission
    context?.setCount(context.value + 1);
  };

  return (
    <form >
    {/* <h1>{value.name}</h1>
    <button onClick={()=>setValue({
      name:'Think & grow Rich',
      price:200
    })} >{props.name}</button> */}
    <h1>{context?.value}</h1>
    {/* <input type="text"
    value={value}
    onChange={handleNameChange}
    placeholder="Enter Your name"  /> */}
    <button onClick={handleIncrement}>Inc</button>
    </form>
  )
}

export default Button