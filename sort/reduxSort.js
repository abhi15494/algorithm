const arr = [];
for (let i = 0; i < 40; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
console.log('[BEFORE SORT]:', arr.length, arr);

function reduxSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...reduxSort(left), pivot, ...reduxSort(right)];
}

const sortedArr = reduxSort(arr);
console.log('[AFTER SORT]:', sortedArr.length, sortedArr);

