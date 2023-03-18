import { useState } from 'react'
import './App.css'


function App() {
  // const [keyCombo, setKeyCombo] = useState('')

  let keyCombo = '';
  const charA = " KC_A";

  window.addEventListener('keydown', e => {
    // setKeyCombo = '';
    keyCombo = '';

    // console.log(e)
    if(e.key === "a"){
        keyCombo += charA;
        console.log(keyCombo);
    }
    // return keyCombo;
  })
  return (
    <div className="App">
        <h2>Press your key combination to program your keyboard</h2>
        <h3>Your Key Combination is: {keyCombo} </h3>


      {/*
        <input type="text" class="keyboard" />
        <button class="btn">Send</button>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
