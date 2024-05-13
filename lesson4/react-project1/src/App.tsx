import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppTitle from './components/AppTitle'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>



    <AppTitle onBtnClick={(newValue)=>setCount(newValue)} h1Title='My H1 Title' h2Title='My H2 Title'></AppTitle>
    <AppTitle onBtnClick={(newValue)=>setCount(newValue)} h1Title='New Title' h2Title='New Subtitle'></AppTitle>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
