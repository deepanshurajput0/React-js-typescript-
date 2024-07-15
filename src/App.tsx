import './App.css'
import { Person } from './components/Person'
import Counter from './components/Counter'

import Button from './components/Button'
function App() {
   let name:string = 'deepanshu'
   let age:number = 20
   let single:boolean = true
  return (
    <>
     <Person name={name} age={age} single={single}  /> 
     <Counter/>  
     <Button onClick={()=>alert('hello typescript')} name={'click me'} />
    </>
  )
}

export default App
