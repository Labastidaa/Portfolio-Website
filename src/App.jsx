import { useState } from 'react'
import './App.css'
import Navbar from './Components/Nav/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Stacks from './Components/Stacks'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='App bg-white flex flex-col justify-center items-center'>
      <Hero />
      <Projects />
      <Stacks />
      <Navbar />
    </div>
  )
}

export default App
