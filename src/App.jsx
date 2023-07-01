import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Results from './components/Results'
import Summary from './components/Summary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Results />
      <Summary />
    </div>
  )
}

export default App
