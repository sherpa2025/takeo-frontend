import reactLogo from './assets/react.svg'
import githubLogo from './assets/github.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/sherpa2025" target="_blank">
          <img src={githubLogo} className="logo github" alt="Github logo" />
        </a>
      </div>
      <h1 className="read-the-docs">Vite + React</h1>
      <h2 className="read-the-docs">Nima Sherpa</h2>
      <p className="read-the-docs">
        Click on the Github logo to view my Github <br />
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
