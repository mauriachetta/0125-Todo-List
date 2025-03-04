import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const [usuario, setUsuario] = useState("")

  

  function incrementCounter(){
    setCount(count + 1)
  }

  function updateUserName(e){
const name = e.target.value;

    setUsuario(name)
  }


  return (
    <>
      <h1>Contador</h1>
      <h2>Valor actual: {count}</h2>
      <button onClick={()=> incrementCounter() }>Add +</button>

      <hr />

      <input type="text" onKeyUp={(evt) => updateUserName(evt)} />
      <h3>Bienvenido {usuario}</h3>
    </>
  )
}

export default App
