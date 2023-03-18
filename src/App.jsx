import { useState } from 'react'
import './App.css'


function App() {

  let keyCombo = { charA: "KC_A" }
  // const charA = "KC_A";
  // let displayedCode =[];
  window.addEventListener('keyup', e => {
    keyCombo = '';
    console.log(e);
    if(e.key === "a"){
      // displayedCode += keyCombo.charA;;
      // console.log(keyCombo);
    }
    // return displayedCode;
  })
  return (
    <div className="App">
        <h2>Press your key combination to program your keyboard</h2>
        <h3>Your Key Combination is:  </h3>
        <div>{keyCombo.charA}</div>
    </div>
  )
}

export default App
