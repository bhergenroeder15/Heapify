function MinHeap(updateState){
  let list = [];
  
  //Heapify
  this.minHeapify = (arr, n, i) => {
    let smallest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
     if (l < n && arr[l] < arr[smallest]) {
           smallest = l; 
     }

     // If right child is smaller than smallest so far 
     if (r < n && arr[r] < arr[smallest]) {
          smallest = r; 
     }

     // If smallest is not root 
     if (smallest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[smallest]; 
          arr[smallest] = temp; 

        // Recursively heapify the affected sub-tree 
        this.minHeapify(arr, n, smallest); 
      } 
  }
  
  //Insert Value
  this.insert = (num) => {
    const size = list.length;
    
    if(size === 0){
      list.push(num);
    }else{
      list.push(num);
      
    let currentIndex = size;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    // Compare the new element with its parent and swap if necessary
    while (currentIndex > 0 && list[parentIndex] > num) {
        // Swap parent and current node
        [list[parentIndex], list[currentIndex]] = [list[currentIndex], list[parentIndex]];
        // Move up the tree
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }

    updateState([...list]);

  }
  
  //Remove value
  this.delete = () => {
    list.shift()
    
    //Heapify the list again
    for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
         this.minHeapify(list, list.length, i); 
      }
    updateState([...list]);
  }
  

  this.getList = () => list;
}

export default MinHeap