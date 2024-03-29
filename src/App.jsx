import { useEffect, useState } from 'react'
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
  const [minHeap, setMinHeap] = useState(new MinHeap(setMinList))



  return (
    <>
      <h1>Heapify</h1>
      <p>
        A Heap is a complete binary tree data structure that satisfies the heap property: for every node, the value of its children is less than or equal to its own value. Heaps are often used to implement priority queues, where the smallest or largest element is always at the root of the tree. 
      </p>
      <p>
        This application provides a visualization of how heaps are constructed and maintained, both as a graph and as an array. Please enter your desired values into the inputs below to see how your heap would be structured.
      </p>
        <div className='container'>
          <h2>Max Heap</h2>
            <div id='maxHeap'>
              <form onSubmit={(e) => {e.preventDefault(); maxHeap.insert(Number(maxInput))}}> 
                <input type="text" id='maxHeapInput' onChange={(e) => {setMaxInput(e.target.value)}}/>
                <button className='addButton' type='submit'>Add to Max Heap</button>
              </form>
              <button className='removeButton' onClick={() => {maxHeap.delete()}}>Remove priority element</button>
            </div>

          {formGraph(maxList)}
          <p>Max Heap as array: [{maxList.map((el) => `${el}`).join(', ')}]</p>
        </div>

        <div className='container'>
          <h2>Min Heap</h2>
            <div id='minHeap'>
              <form onSubmit={(e) => {e.preventDefault(); minHeap.insert(Number(minInput))}}>
                <input type="text" id='minHeapInput' onChange={(e) => {setMinInput(e.target.value)}}/>
                <button className='addButton' type='submit'>Add to Min Heap</button>
              </form>
              <button className='removeButton' onClick={() => {minHeap.delete()}}>Remove priority element</button>
            </div>

          {formGraph(minList)}
          <p>Min Heap as array: [{minList.map((el) => `${el}`).join(', ')}]</p>
        </div>

    </>
  )
}

export default App
