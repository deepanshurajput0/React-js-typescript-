import { useState } from "react"

interface Prop{
  name:string,
  age:number,
  single:boolean     
}


export const Person =({name,age,single}:Prop)=>{ 
    const [toggle,setToggle] = useState<boolean>(false)

    const showContent =()=>{
        setToggle(!toggle)
    }


    return <div>
        {
            toggle ? <>
              <p>Name: {name}</p>
       <p>Age: {age}</p>
       <p>status: {single ? 'single' : 'no single' }</p>
       <p></p>
            </> : <>
            
            </>
        }
        <button onClick={showContent} >Toggle</button>
    </div>
}