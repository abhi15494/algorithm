const arr = [2, 3, 3, 6, 14, 19, 21, 23, 25, 26, 29, 32, 33, 35, 39, 40, 42, 43, 43, 44, 48, 49, 54, 55, 55, 64, 65, 66, 69, 70, 72, 78, 82, 82, 83, 88, 89, 91, 91, 97];

function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex < rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(arr[middleIndex] === target) {
            return middleIndex;
        }

        if(arr[middleIndex] > target) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex - 1;
        }
    }

    return -1;
}

console.log(binarySearch(arr, 26));