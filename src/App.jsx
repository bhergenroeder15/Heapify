import { useState, useEffect } from 'react'
import formGraph from './formGraph'
import './App.css'
import MaxHeap from './MaxHeap'
import MinHeap from './MinHeap'

function App() {
  const [minInput, setMinInput] = useState(0)
  const [maxInput, setMaxInput] = useState(0)

  const [maxList, setMaxList] = useState([])
  const [minList, setMinList] = useState([])

  const [maxHeap, setMaxHeap] = useState(new MaxHeap(setMaxList))
  const [minHeap, setMinHeap] = useState(new MinHeap())


  // useEffect(() => {
  //   setMaxList(maxHeap.getList())
  // }, [maxHeap])
  return (
    <>
     <h1>Heapify</h1>
      <h2>Max Heap</h2>
      <input type="text" id='maxHeapInput' onChange={(e) => {setMaxInput(e.target.value)}}/>
      <button onClick={() => {maxHeap.insert(maxInput)}}>Add to Max Heap</button>
      <button onClick={() => {maxHeap.delete()}}>Remove priority element</button>

      {formGraph(maxList)}
      <h2>Min Heap</h2>
      <input type="text" id='minHeapInput' onChange={(e) => {setMinInput(e.target.value)}}/>
      <button onClick={() => {minHeap.insert(minInput)}}>Add to Min Heap</button>
      {formGraph(minHeap.getList())}
    </>
  )
}

export default App
