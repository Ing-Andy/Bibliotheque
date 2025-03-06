import React from 'react'
import './App.css'
import UseApi from './api/UseApi'

export default function UseApp() {
  const [isbn, setIsbn] = React.useState()
  const onChange = (e) => {
    setIsbn(e.target.value)
  }

  return (
    <div className='App'>
      <h1>andy vas reussir ca !!!!!!!!!!!</h1>
      <header className='searchBar'>
        <input
            type="text"
            value={isbn}
            onChange={onChange}
            placeholder="enter your is isbn"
      />
      <button className='bouton1' > Search </button>
      </header>
      <section >
        <table>
          <tr>
            <th>Isbn</th>
            <th>titre</th>
            <th>dsds</th>
            <th>dsfsf</th>
            <th>sfaf</th>
            <th>dscsac</th>
            <th>fbdn</th>
          </tr>
        </table>
      </section>
    </div>
  )
}
