function merge(left, right) {
    let result = []
    let leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = arr.length / 2

    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

console.log(mergeSort([5, 7, 3, 4, 2, 1, 8, 9]))