import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const TODO_LIST = [
  {id:1, text:"Tarea 1", completed:false},
  {id:1, text:"Tarea 2", completed:false},
  {id:1, text:"Tarea 3", completed:false},
  {id:1, text:"Tarea 4", completed:false},
  {id:1, text:"Tarea 5", completed:false}

]

function App() {



  return (
    <>
      <h1 className='todo-list-title'>
        Todo List React:
      </h1>

      <hr />

      <div className="input-container">
        <label htmlFor="">Agregar tarea:</label>
        <input type="text" />
      </div>

      <div className='todo-list-container'>

        <ul className="todo-list">

          {
            TODO_LIST.map((todo)=>{
              return(
                <li className="todo-item">
                <div className="todo-left">
                  <input type="checkbox" className='todo-checkbox' />
                  <span className='todo-item'>
                    {todo.text}
                  </span>
    
                </div>
                <button className="todo-dele">Eliminar</button>
              </li>
              )
            })
          }

        </ul>
      </div>
    </>
  )
}

export default App
