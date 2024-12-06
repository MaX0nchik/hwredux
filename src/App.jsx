import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainApp from './components/MainApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MainApp/>
        </div>
    </>
  )
}

export default App
