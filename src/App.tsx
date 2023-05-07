import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import typescriptLogo from '/typescript.svg'
import './App.css'
import ListaDeRepositorios from './components/ListaRepositorios'
import Avatar from './components/Avatar'

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
      <h2>Meu primeiro projeto React com o Vite.</h2>
      <Avatar/>
      <ListaDeRepositorios />
    </>
  )
}

export default App
