import { useState } from "react"


const Counter = () => {
    const [counter,setCounter] = useState<number>(0)
    function Inc(){
      setCounter(counter+1)
    }
    function Dec(){
        if(counter>0){
            setCounter(counter-1)
        }else if(counter<0){
           setCounter(0)
        }
        
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={Inc} >Inc</button>
        <button onClick={Dec} >Dec</button>
    </div>
  )
}

export default Counter






