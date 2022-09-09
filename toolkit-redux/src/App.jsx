import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { descrement, increment } from './store/slices/counter'

function App() {
  // const [count, setCount] = useState(0)

  const {counter}=useSelector(state=>state.counter)
  const dispatch=useDispatch();


  //*obtener valores del store de redux
  

  return (
    <div className="App">
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
        <button onClick={ ()=>dispatch( increment()  ) } >
          Increment {counter}
        </button>
        <button onClick={ ()=>dispatch( descrement()  ) } >
          Descrement is {counter}
        </button>
       
      </div>
    </div>
  )
}

export default App
