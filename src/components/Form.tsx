// import './App.css'
// import React, { FormEvent, useState } from 'react'

// interface Person {
//   name:string,
//   age:number
// }

// function App() {
//   const [user, setUser] = useState<Person>({
//     name:'',
//     age:0
//   })
//   const submitHandler =(e:FormEvent<HTMLFormElement>)=>{
//      e.preventDefault()
//      console.log(user)
//   }
//   return (
//     <form onSubmit={submitHandler} >
//      <input type="number" 
//      value={user?.age} 
//      onChange={(e)=>setUser((prev)=>({...prev, age:Number(e.target.value)}))} 
//      />
//      <input type="text" 
//      value={user?.name} 
//      onChange={(e)=>setUser((prev)=>({...prev, name:e.target.value}))} 
//      />
//      <button type='submit' >Register</button>
//     </form>
//   )
// }

// export default App
