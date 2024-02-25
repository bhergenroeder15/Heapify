import { useState } from 'react'
import formGraph from './formGraph'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const maxHeap = [12, 10, 9, 5, 6, 1]

  const maxGraph = formGraph(maxHeap)
  return (
    <>
     <h1>Heapify</h1>

      {maxGraph}
    </>
  )
}

export default App
