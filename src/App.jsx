import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Technologies from './Components/Technologies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero/>
      <Navbar />
      <Projects />
      <Technologies/>
    </div>
  )
}

export default App
