import { useState } from 'react'
import './App.css'


function App() {

  let keyCombo = '';
  const charA = " KC_A";

  window.addEventListener('keydown', e => {
    keyCombo = '';

    // console.log(e)
    if(e.key === "a"){
        keyCombo += charA;
        console.log(keyCombo);
        return keyCombo;
    }
  })
  return (
    <div className="App">
        <h2>Press your key combination to program your keyboard</h2>
        <h3>Your Key Combination is: {keyCombo} </h3>
    </div>
  )
}

export default App
