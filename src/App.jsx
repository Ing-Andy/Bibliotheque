import { useState } from 'react'
import './App.css'
import Myapi from '../api/Myapi'

function App() {
  const [codeBar, setCodeBar] = useState('')
  const mydata = Myapi(codeBar);
  console.log(mydata)
  return (
    <div className='App'>
      <h1><strong>le stockage des livre de la biblio de jfn </strong></h1>
      
      <div className='searchBar'>
        <input 
            type="text"
            placeholder="entrer le code-bar du livre"
            value={codeBar}
            onChange={e => setCodeBar(e.target.value)}
         />
        <button className='bouton1' onClick={() => setValeur('')}>Chercher</button>
      </div>
      <br />
      <br />
      <br />
      <div className='livre'>
        <div className='image'>
          <img src="/" alt="image du livre" />
        </div>
        <button className='bouton2'> Ajouter</button>
      </div>
    </div>
  )
}

export default App
