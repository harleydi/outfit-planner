import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='title'>Outfit Planner</h1>
        <p className='subtitle'>Find what to wear</p>
      </div>
      <h5>Fasion Styles / Dress Code</h5>
      <button>Casual</button>
      <button>Sport</button>
      <button>Formal</button>
    </>
  )
}

export default App
