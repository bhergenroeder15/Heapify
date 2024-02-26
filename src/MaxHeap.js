function MaxHeap(updateState){
  const list = [];
  
  //Heapify
  this.maxHeapify = (arr, n, i) => {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
     if (l < n && arr[l] > arr[largest]) {
           largest = l; 
     }

     // If right child is smaller than smallest so far 
     if (r < n && arr[r] > arr[largest]) {
          largest = r; 
     }

     // If smallest is not root 
     if (largest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[largest]; 
          arr[largest] = temp; 

        // Recursively heapify the affected sub-tree 
        this.maxHeapify(arr, n, largest); 
      } 
  }
  
  //Insert Value

  this.insert = (num) => {
  const size = list.length;

  if(size === 0){
    list.push(num);
  } else {
    list.push(num);
    let currentIndex = size;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    // Compare the new element with its parent and swap if necessary
    while (currentIndex > 0 && list[parentIndex] < num) {
      // Swap parent and current node
      [list[parentIndex], list[currentIndex]] = [list[currentIndex], list[parentIndex]];
      // Move up the tree
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
   
  }
  
  updateState([...list]);
}
  
  //Remove priority element
  this.delete = () => {

    list.shift()
    //Heapify the list again
    for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
         this.maxHeapify(list, list.length, i); 
     }
    updateState([...list])
  }

  this.getList = () => list;
}

export default MaxHeap