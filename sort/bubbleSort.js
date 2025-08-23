const arr = Array.from({length: 40}, (i) => Math.round(50-Math.random()*100));


console.log('[BEFORE_SORTING]: ', arr);

function bubbleSort(arr) {
    let swapped = false;

    do {
        swapped = false;
        for(let i=0; i<arr.length; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(arr);
console.log('[AFTER_SORTING]: ', arr);

// TIME COMPLEXITY: O(n^2);