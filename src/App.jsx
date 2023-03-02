import { useState } from 'react'
import './App.css'
import Navbar from './Components/Nav/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Stacks from './Components/Stacks'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App w-[100%] bg-black">
      <Hero/>
      <Navbar />
      <Projects />
      <Stacks/>
    </div>
  )
}

export default App
