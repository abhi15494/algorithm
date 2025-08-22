const arr = [2, 3, 3, 6, 14, 19, 21, 23, 25, 26, 29, 32, 33, 35, 39, 40, 42, 43, 43, 44, 48, 49, 54, 55, 55, 64, 65, 66, 69, 70, 72, 78, 82, 82, 83, 88, 89, 91, 91, 97];

function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    return search(arr, target, leftIndex, rightIndex)
}

function search(arr, target, left, right) {
    if(left > right) {
        return -1;
    }

    const middle = Math.floor((left+right)/2);
    if(arr[middle]===target) {
        return middle;
    }

    if(arr[middle] > target) {
        return search(arr, target, left, middle-1);
    } else {
        return search(arr, target, middle+1, right);
    }
}

console.log(binarySearch(arr, 26));