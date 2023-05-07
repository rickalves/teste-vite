import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import typescriptLogo from '/typescript.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={typescriptLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

      </div>
      <h2>Primeiro projeto React com o Vite.</h2>
    </>
  )
}

export default App
