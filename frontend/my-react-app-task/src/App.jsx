import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import FrontendLearn from './DayFirst/Front_Back_Res'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FrontendLearn/>
    </>
  )
}

export default App
