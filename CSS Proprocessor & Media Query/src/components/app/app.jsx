// Separation of Concern

import Contact from '../contact/contact'
import "../../styles/app.scss"


function App() {
  return (
    <>
      <h1 className="container">Frontend: Week1 - Day2</h1>

      <Contact />

      <div className="container1">
        <h2>Task:</h2>
        <ul>
          <li className="task1">Install SCC</li>
          <li className="task2">Use CSS Preprocessor with SCSS</li>
          <li className="task3">Learn Media Queries</li>
        </ul>
      </div>
    </>
  )
}

// <></> -> React Fragment

export default App
