import { useState } from 'react'
import formGraph from './formGraph'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [maxHeap, setMaxHeap] = useState([])
  const [minHeap, setMinHeap] = useState([])
  return (
    <>
     <h1>Heapify</h1>
      <h2>Max Heap</h2>
      <input type="text" id='maxHeapInput'/>
      <button>Add to Max Heap</button>

      {formGraph(maxHeap)}
      <h2>Min Heap</h2>
      <input type="text" id='minHeapInput'/>
      <button>Add to Min Heap</button>
      {formGraph(minHeap)}
    </>
  )
}

export default App
