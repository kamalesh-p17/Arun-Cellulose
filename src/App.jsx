import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/Aboutus/About'
import Process from './Components/Process/Process'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <About/>
      <Process/>
    </div>
    
  )
}

export default App
