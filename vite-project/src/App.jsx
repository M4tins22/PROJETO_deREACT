import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './COMPONENTS/components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Contadores em React</h1>
      <Contador/>
      <Contador/>
    </>
  )
}

export default App
