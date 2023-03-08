import { useState } from 'react'
import './App.css'

function App() {

  const [subs, setSubs] = useState ([
    {
      nick:"Dapelu",
      subMonths:3,
      avatar: 'https://i.pravatar.cc/150?u=dapelu',
      description:"Dapelu hace de moderador a veces"
    },
    {
      nick:"Sergio_Serrano",
      subMonths:7,
      avatar: 'https://i.pravatar.cc/150?u=sergio'
    }
  ])



  return (
    <div className="App">
        <h1>Midu Subs</h1>
        <ul>
          {
            subs.map(sub =>{
              return (
                <li key={sub.nick}>
                  <img src={sub.avatar} alt={`Avatar for ${sub.nick}`}/>
                  <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                  <p>{sub.description?.substring(0,100)}</p>
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default App
