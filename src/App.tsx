import { createContext, ReactNode, useState } from "react"
import Box from "./components/Box"

type  ThemeType = string | number 

interface ThemeContextType {
  theme: ThemeType,
  toggleTheme:()=>void
}

export const ThemeContext = createContext<ThemeContextType >({
  theme:'light',
  toggleTheme:()=>{}
})

const ThemeProvider =({children}:{children:ReactNode})=>{
  const [theme, setTheme] = useState<ThemeType>('light')
  const toggleTheme =()=>{
     setTheme((prev)=>prev === 'light' ? 'dark ' : 'light')
  }
  return(
    <ThemeContext.Provider value={{theme, toggleTheme}} >
       {children}
    </ThemeContext.Provider>
  )
}


function App() {

  return (
    <ThemeProvider>
      <Box label="name" value={'name'} setter={''}/>
    </ThemeProvider>
  )
}

export default App
